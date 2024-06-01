import request from "supertest"

import app from "../src/shared/http/server"

let server: any
beforeAll(() => {
  server = app.listen(3000)
})

describe("GET /status", () => {
  it("Should return a status code of 200", async () => {
    const response = await request(app).get("/status")
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: "Server is running on port 3000" })
  })
})

afterAll((done) => {
  server.close(done)
})
