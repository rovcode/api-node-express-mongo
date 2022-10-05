const request = require("supertest");
const app = require("../app");
describe("[AUTH] it is the test for /api/auth", () => {
  test("This should return a 404 error", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "demo2@gmail.com",
      password: "2323232323",
    });
    expect(response.statusCode).toEqual(404);
  });
});
