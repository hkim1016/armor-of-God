const express = require('express');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true })

const router = express.Router();

router.get('/', (req, res) => {
    // console.log(req.session.user);

    res.render('../views/index');
});

router.get('/about', (req, res) => {
    res.render('../views/about');
});

router.get('/contact', (req, res) => {
    console.log('session', req.session.user);
    res.render('../views/contact');
});

router.get('/logsign', (req, res) => {
    res.render('../views/login-signup');
});

router.get('/logout', (req, res) => {
    res.locals.user = null;

    if(req.session) {
        req.session.destroy();
    }

    res.render('../views/index');
})

module.exports = router;