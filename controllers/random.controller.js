const fs = require('fs');

const randomController = (req, res) => {
    fs.readFile('users.json', (err, data) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            const users = JSON.parse(data);
            const randomId = Math.floor(Math.random() * users.length);
            const randomUser = users[randomId];
            return res.send(randomUser);
        }
    });
}

module.exports = randomController;