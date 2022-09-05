const fs = require('fs');

const allController = (req, res) => {
    const { limit } = req.query;

    // Read All Users
    fs.readFile('users.json', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send({
                success: false,
                message: 'Internal Server Error.'
            });
        } else {
            let users = JSON.parse(data);
            if (limit) users = users.slice(0, limit);

            return res.send({
                success: true,
                message: users
            });
        }
    });
}

module.exports = allController;