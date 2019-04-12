const express = require("express");
const server = express();
const gamesRouter = require("../games-resource/games-router.js");

server.use(express.json());
server.use("/games", gamesRouter);

server.get("/", async (req, res) => {
  res.status(200).send("Jello World");
});

module.exports = server;
