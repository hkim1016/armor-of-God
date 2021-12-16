const colors  = require('colors');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

app.use('/', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`.blue);
})