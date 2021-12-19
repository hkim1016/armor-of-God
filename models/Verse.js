const mongoose = require('mongoose');

const verseSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    verse: {
        type: String,
        require: true,
        unique: true
    },
    verseContent: {
        type: String,
        require: true
    },
    note: {
        type: String
    }
}, {collection: 'verse'});

module.exports = mongoose.model('Verse', verseSchema);