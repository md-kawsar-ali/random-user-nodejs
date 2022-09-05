const fs = require('fs');

const allController = (req, res) => {
    fs.readFile('users.json', (err, data) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            const users = JSON.parse(data);
            return res.send(users);
        }
    });
}

module.exports = allController;