const request = require("supertest");
const server = require("./server.js");
const db = require("../data/dbConfig.js");

describe("server", () => {
  beforeEach(async () => {
    await db("games").truncate();
  });
  describe("GET /", () => {
    it("responds 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
    it("responds with text", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("text/html");
    });
  });
  describe("POST /games", () => {
    it("responds 201 with new post", async () => {
      const newGame = {
        title: "League2",
        genre: "Computer",
        releaseYear: 2005
      };
      const res = await request(server)
        .post("/games")
        .send(newGame);
      expect(res.status).toBe(201);
    });
    it("responds 422 if post info is incomplete", async () => {
      const newGame = { title: "League", releaseYear: 2005 };
      const res = await request(server)
        .post("/games")
        .send(newGame);
      expect(res.status).toBe(422);
    });
    it("returns new post after posting", async () => {
      let newGame = { title: "League", genre: "Computer", releaseYear: 2005 };
      const res = await request(server)
      .post("/games")
      .send(newGame);
      expect(res.data)
    });
  });
  describe("GET /games", () => {
    it("Returns status 200", async () => {
      const res = await request(server).get("/games");
      expect(res.status).toBe(200);
    });
    it("Return empty array if no games", async () => {
      const res = await request(server).get("/games");
      expect(res.data).toEqual("[]");
    });
    it("Returns array of games", async () => {
      const res = await request(server).get("/games");
      expect(res.type).toBe("array");
    });
  });
  describe("DELETE", () => {
    it("responds 200", async () => {
      const res = await request(server).delete("/shoes/:id");
      expect(res.status).toBe(200);
    });
  });
});
