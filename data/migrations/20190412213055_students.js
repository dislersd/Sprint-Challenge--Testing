
exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", students => {
    students.increments()
    students.string("handle", 128).notNullable().unique()
    students.string("field", 128)
    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students")
};
