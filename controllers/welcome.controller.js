const welcomeController = (req, res) => {
    res.send({
        success: true,
        message: 'Welcome to the Random User Genarator!'
    });
}

module.exports = welcomeController;