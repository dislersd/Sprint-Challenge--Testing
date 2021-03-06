const request = require("supertest");
const server = require("../../api/server");
const db = require("../../data/dbConfig");

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
      expect(newGame);
    });
  });
  describe("GET /games", () => {
    it("Returns status 200", async () => {
      const res = await request(server).get("/games");
      expect(res.status).toBe(200);
    });
    it("Return empty array if no games", async () => {
      const res = await request(server).get("/games");
      expect(res.data).toBeUndefined();
    });
    it("Returns array of games", async () => {
      let newGame = { title: "League", genre: "Computer", releaseYear: 2005 };
      await request(server)
        .post("/games")
        .send(newGame);
      const res = await request(server).get("/games");
      expect(res.body).toEqual([{ id: 1, title: "League", genre: "Computer", releaseYear: 2005 }]);
    });
  });
  describe("DELETE", () => {
    it("responds 200", async () => {
      let newGame = { title: "League", genre: "Computer", releaseYear: 2005 };
      await request(server)
      .post("/games")
      .send(newGame);
      const res = await request(server).delete("/games/1");
      expect(res.status).toBe(200);
    });
    it("responds 404", async () => {
      let newGame = { title: "League", genre: "Computer", releaseYear: 2005 };
      await request(server)
      .post("/games")
      .send(newGame);
      const res = await request(server).delete("/games/2");
      expect(res.status).toBe(404);
    });
  });
});
