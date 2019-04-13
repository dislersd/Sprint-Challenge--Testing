const express = require("express");
const server = express();
const gamesRouter = require("../resources/games/games-router");
const studentsRouter = require('../resources/students/students-router')

server.use(express.json());
server.use("/games", gamesRouter);
server.use("/students", studentsRouter);

server.get("/", async (req, res) => {
  res.status(200).send("Jello World");
});

module.exports = server;
