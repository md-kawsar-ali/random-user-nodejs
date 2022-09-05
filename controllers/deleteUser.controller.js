const fs = require('fs');

const deleteUserController = (req, res) => {
    const userId = req.params.id;

    // Read All Users
    fs.readFile('users.json', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send({
                success: false,
                message: 'Internal Server Error.'
            });
        }

        const users = JSON.parse(data);
        const newUsers = users.filter(user => user.id !== userId);
        const currentUser = users.find(user => user.id === userId);

        // Current User existing or not
        if (!currentUser) {
            return res.status(404).send({
                success: false,
                message: 'User Not Found!'
            });
        }

        // Write updated Users
        fs.writeFile('users.json', JSON.stringify(newUsers), (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    success: false,
                    message: 'Internal Server Error.'
                });
            }

            return res.send({
                success: true,
                message: 'User Removed!'
            });
        })
    });
}

module.exports = deleteUserController;