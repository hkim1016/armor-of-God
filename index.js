const colors  = require('colors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/aogDB';

app.use(express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

mongoose.connect(MONGO_URI);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require('./routes'));
app.use('/user', require('./routes/user'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`.blue);
})