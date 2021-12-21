const mongoose = require('mongoose');

const verseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        require: true
    },
    verse: {
        type: String,
        require: true
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