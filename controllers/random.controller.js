const fs = require('fs');

const randomController = (req, res) => {
    // Read All Users
    fs.readFile('users.json', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send({
                success: false,
                message: 'Internal Server Error.'
            });
        } else {
            const users = JSON.parse(data);

            // Genarate Random Id
            const randomId = Math.floor(Math.random() * users.length);
            const randomUser = users[randomId];
            return res.send({
                successs: true,
                message: randomUser
            });
        }
    });
}

module.exports = randomController;