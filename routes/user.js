const express = require('express');

const router = express.Router();

const User = require('../models/User');

router.get('/json', (req, res) => {
    User.find({}, (err, users) => {
        console.log(users);
    })
})

router.post('/login', async (req, res) => {
    console.log("USER GET ROUTER: ", req.body);
    const user = await User.findOne({email: req.body.email, password: req.body.password}, (err) => {
        if(err) throw err;
    }).clone();

    req.session.user = user

    res.redirect('/');
});

router.post('/', async (req, res) => {
    console.log(req.body);
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