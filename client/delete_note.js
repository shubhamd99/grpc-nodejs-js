const client = require('./client');

async function deleteList() {
    return new Promise((resolve, reject) => {
        client.delete({ id: '1' }, (error, _) => {
            if (!error) {
                console.log('Note Has been successfully deleted');
                resolve();
            } else {
                console.error(error);
                reject();
            }
        });
    });
};

module.exports = {
    deleteList,
};