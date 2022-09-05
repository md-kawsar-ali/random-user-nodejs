const fs = require('fs');

const updateUserController = (req, res) => {
    const userId = req.params.id;
    let { name, gender, contact, address, photoUrl } = req.body;

    // Read All users
    fs.readFile('users.json', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send({
                success: false,
                message: 'Internal Server Error!'
            });
        } else {
            const users = JSON.parse(data);
            let currentUser = users.find(user => user.id === userId);
            const restUsers = users.filter(user => user.id !== userId);

            // User existing or not
            if (!currentUser) {
                return res.status(404).send({
                    success: false,
                    message: 'User Not Found!'
                });
            }

            // Replace new value if availave
            const id = currentUser.id;
            name = name || currentUser.name;
            gender = gender || currentUser.gender;
            contact = contact || currentUser.contact;
            address = address || currentUser.address;
            photoUrl = photoUrl || currentUser.photoUrl;

            // Update Current User
            currentUser = {
                id,
                name,
                gender,
                contact,
                address,
                photoUrl
            }

            // Manually Update users
            const updatedUsers = [...restUsers, currentUser];

            // Write Updated Users
            fs.writeFile('users.json', JSON.stringify(updatedUsers), (err) => {
                if (err) {
                    return res.stauts(500).send({
                        success: false,
                        message: 'Internal Server Error.'
                    })
                } else {
                    return res.send({
                        success: true,
                        message: 'User Updated!'
                    });
                }
            });
        }
    });
}

module.exports = updateUserController;