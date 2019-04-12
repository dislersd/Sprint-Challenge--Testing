// if no DATABASE_URL env variable use this object
const localPg = {
  host: "localhost",
  database: "games",
  user: "student",
  password: "hired"
};
const productionDbConnectionString = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/games.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  // Production is for hosting
  production: {
    client: "pg",
    connection: productionDbConnectionString, // could be object or string
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
