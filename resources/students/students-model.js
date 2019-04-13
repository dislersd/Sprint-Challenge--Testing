const db = require("../../data/dbConfig");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(student) {
  const [id] = await db("students").insert(student);
  return db("students")
    .where({ id })
    .first();
}

async function update(id, changes) {
  await db("students")
    .where({ id })
    .update(changes);
  return db("students").where({ id });
}

async function remove(id) {
  return await db("students")
    .where({ id })
    .del();
}

async function getAll() {
  return await db("students");
}

async function findById(id) {
  return await db("students")
    .where({ id })
    .first();
}
