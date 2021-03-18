const client = require('./client');

let newNote = {
    title: "Shubham Note",
    content: "Shubham Note content",
};

async function insertList() {
    return new Promise((resolve, reject) => {
        client.insert(newNote, (error, note) => {
            if (!error) {
               console.log('New Note created successfully', note);
               resolve(note);
            } else {
               console.error(error);
               reject(error);
            }
        });
    });
};

module.exports = {
    insertList,
};