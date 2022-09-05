const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;

const userRoute = require('./routes/v1/user.route');
const welcomeRoute = require('./routes/v1/welcome.route');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/', welcomeRoute);
app.use('/api/v1/', welcomeRoute);
app.use('/api/v1/user/', userRoute);

// Listener
app.listen(PORT, () => {
    console.log('Server running in Port: ', PORT);
});