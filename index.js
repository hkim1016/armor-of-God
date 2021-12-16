const mongoose = require('mongoose');
const colors  = require('colors');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('index');
// })

app.use('/', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`.blue);
})