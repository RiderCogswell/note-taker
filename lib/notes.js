const fs = require('fs');
const path = require('path');

function findById(id, notes) {
    const result = notes.filter((note) => note.id === id)[0];
    return result;
};

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
};

function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
        return false;
    }
    if (!note.text || typeof note.title !== "string") {
        return false;
    }
    return true;
};

module.exports = {
    findById,
    createNewNote,
    validateNote,
};