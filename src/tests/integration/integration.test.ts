import request from "supertest";
import app from "../../server";

describe("Integration Test: API Endpoint", () => {
  it("should return 'Hello World' when calling GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World");
  });
});
