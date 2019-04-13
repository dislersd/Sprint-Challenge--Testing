exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("games")
    .truncate()
    .then(function() {
      return knex("games").insert([
        { title: "Pacman", genre: "Arcade", releaseYear: 1980 },
        { title: "Zelda", genre: "Console", releaseYear: 1995 },
        { title: "Monopoly", genre: "Board", releaseYear: 1900 },
        { title: "Apex Legends", genre: "PC", releaseYear: 2017 }
      ]);
    });
};
