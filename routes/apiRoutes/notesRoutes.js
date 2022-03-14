const router = require('express').Router();
const {
        findById,
        createNewNote,
        validateNote
} = require('../../lib/notes');
const { notes } = require('../../db/notes.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);

    const notesIndex = notes.findIndex(note => note.id == result);

    notes.splice(notesIndex, 1);

    return res.send();
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not formatted correctly.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }

});

module.exports = router;