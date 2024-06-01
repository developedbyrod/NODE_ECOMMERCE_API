import request from "supertest"

import app from "../src/shared/http/server"

describe("GET /status", () => {
  it("Should return a status code of 200", async () => {
    const response = await request(app).get("/status")
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: "Server is running on port 3000" })
  })
})
