const request = require("supertest");
const server = require("../../api/server");
const db = require("../../data/dbConfig");

describe('STUDENTS', () => {
  describe('GET', () => {
    it('Returns 200', async () => {
      const res = await request(server).get('/students');
      expect(res.status).toBe(200)
    });
    it('Returns An Array', async () => {
      const res = await request(server).get('/students');
      expect(res.body).toBeInstanceOf(Array)
    });
  });
});