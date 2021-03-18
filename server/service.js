const { status } = require('grpc');
const uuid = require('uuid');

// Hardcoded Notes Array
const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1'},
    { id: '2', title: 'Note 2', content: 'Content 2'}
];

const services = {
    list: (_, callback) => {
        callback(null, notes);
    },
    insert: (call, callback) => {
        let note = call.request;
        note.id = uuid.v1();
        notes.push(note);
        callback(null, note);
    },
    delete: (call, callback) => {
        let existingNoteIndex = notes.findIndex((n) => n.id === call.request.id);

        if (existingNoteIndex !== -1) {
            notes.splice(existingNoteIndex, 1);
            callback(null, {});
        } else {
            callback({
                code: status.NOT_FOUND,
                details: "Not found"
            });
        }
    },
};

module.exports = services;