exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("students")
    .truncate()
    .then(function() {
      return knex("students").insert([
        { handle: "Pacman", field: 'photogrophy' },
        { handle: "Zelda", field: 'fashion' },
        { handle: "Monopoly", field: 'finance' },
        { handle: "Apex", field: 'games' }
      ]);
    });
};
