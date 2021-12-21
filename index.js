const colors = require('colors');
const session = require('express-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const mongoose = require('mongoose');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/aogDB';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log(req.method + " " + req.path);
    next();
});

mongoose.connect(MONGO_URI);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(session({ 
    secret: "alksdfhakshf9w3ur893u4hbrqh94eh983u918huj",
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
});

app.use('/', require('./routes'));
app.use('/user', require('./routes/user'));
app.use('/verse', require('./routes/verse'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`.blue);
})