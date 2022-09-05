const fs = require('fs');

const addUserController = (req, res) => {
    const user = req.body;
    const { id, name, gender, contact, address, photoUrl } = user;

    // Required Fields
    if (id && name && gender && contact && address && photoUrl) {

        // Read Existing Users
        fs.readFile('users.json', (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    success: false,
                    message: 'Internal Server Error.'
                });
            } else {
                const prevUsers = JSON.parse(data);
                const updatedUsers = [...prevUsers, user]; // Updated Users (Manually Append)

                // Write updated users
                fs.writeFile('users.json', JSON.stringify(updatedUsers), (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).send({
                            success: false,
                            message: 'Internal Server Error.'
                        });
                    } else {
                        return res.send({
                            success: true,
                            message: "User Saved!"
                        });
                    }
                });
            }
        });
    } else {
        return res.status(406).send({
            success: false,
            message: 'All the input fields required! (id, name, gender, contact, address, photoUrl)'
        })
    }
}

module.exports = addUserController;