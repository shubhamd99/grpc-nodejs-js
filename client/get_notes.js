const client = require('./client');

async function getList() {
    client.list({}, (error, notes) => {
        if (!error) {
            console.log('successfully fetch List notes')
            console.log(notes)
        } else {
            console.error(error)
        }
    });
};

module.exports = {
    getList,
};