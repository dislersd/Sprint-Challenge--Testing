
exports.up = function(knex, Promise) {
  return knex.schema.createTabel("games", games => {
    games.increments()
    games.string("title", 128).notNullable().unique()
    games.string("genre", 128).notNullable()
    games.integer("releaseYear").unsigned()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("games")
};
