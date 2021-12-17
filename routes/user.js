const express = require('express');

const router = express.Router();

const User = require('../models/User');

router.post('/', async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    await user.save((err) => {
        if(err) throw err;
    });

    res.redirect('/');
});

module.exports = router;