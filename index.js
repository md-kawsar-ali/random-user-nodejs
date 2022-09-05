const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const userRoute = require('./routes/v1/user.route');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
// app.route('/').get((req, res) => {
//     res.sendFile(__dirname + '/users.json');
// });

app.use('/api/v1/user/', userRoute);


app.listen(PORT, () => {
    console.log('Server running in Port: ', PORT);
});