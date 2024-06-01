import express, { NextFunction, Request, Response } from "express"

const app = express()
app.use(express.json())

app.get(
  "/status",
  (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json({ message: "Server is running on port 3000" })
  },
)

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

export default app
