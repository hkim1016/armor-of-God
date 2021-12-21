const express = require('express');
const bible = require('bible-english');
const cv = require('chapter-and-verse');

const router = express.Router();

const Verse = require('../models/Verse');

// router.post('/getVerse', async (req, res) => {
//     console.log('getting verse')
//     console.log(req.body.verseId);

//     const verse = await Verse.findOne({_id: req.body.verseId});

//     res.render('../views/verse/verseExpand', {verse: verse});
// });

router.get('/getVerse', (req, res) => {
    // console.log('redirect to this route, /getVerse');
    // console.log('verse', req.session.selectedVerse);
    res.render('../views/verse/verseExpand', {verse: req.session.selectedVerse});
})

router.get('/:id', async (req, res) => {
    // console.log('verse id route get :(', req.params.id);
    const verse = await Verse.findOne({_id: req.params.id});
    // console.log("hello", verse)
    req.session.selectedVerse = verse;

    res.redirect('/verse/getVerse');
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const v = cv(req.body.verse);
    const verse = new Verse({
        user: req.session.user._id,
        verse: v
    });

    if(req.body.title) {
        verse.title = req.body.title;
    } else {
        verse.title = v;
    }

    if(req.body.note) {
        verse.note = req.body.note;
    }

    let verseContent = '';
    await bible.getVerse(v, (err, data) => {
        data.forEach(e => {
            verseContent += e.text;
        })
    });
    console.log(verseContent);
    verse.verseContent = verseContent;

    await verse.save((err) => {
        if(err) throw err;
    });

    res.redirect('/');
});

module.exports = router;