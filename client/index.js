const { deleteList } = require("./delete_note");
const { getList } = require("./get_notes");
const { insertList } = require("./insert_note");

async function run() {
    await getList();
    await insertList();
    // await deleteList();
}

run();