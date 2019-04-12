const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(game) {
  const [id] = await db("games").insert(game);
  return db("games")
    .where({ id })
    .first();
}

async function update(id, changes) {
  await db("games")
    .where({ id })
    .update(changes);
  return db("games").where({ id });
}

async function remove(id) {
  await db("games")
    .where({ id })
    .del();
}

async function getAll() {
  return await db("games");
}

async function findById(id) {
  return await db("games")
    .where({ id })
    .first();
}
