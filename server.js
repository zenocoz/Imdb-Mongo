const express = require("express")
const mongoose = require("mongoose")
const listEndpoints = require("express-list-endpoints")
const cors = require("cors")
const {
  notFoundHandler,
  forbiddenHandler,
  badRequestHandler,
  unAuthorizedHandler,
  genericHandler,
} = require("./src/helpers/errorHandling")

const routes = require("./src/routes")

//INITIAL SETUP
const port = process.env.PORT || 3002
const mongodbUri = process.env.MONGO_DB_LOCAL
const server = express()
server.use(express.json())
server.use(cors())

//routes
server.use("/api", routes)

//ERROR HANDLING MIDDLEWARES
server.use(notFoundHandler)
server.use(badRequestHandler)
server.use(forbiddenHandler)
server.use(unAuthorizedHandler)
server.use(genericHandler)

console.log(listEndpoints)

//CONNECTION
mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB..."))
  .catch((e) => console.log("DB connection error:", e))

server.listen(port, () => {
  if (server.get("env") === "production") {
    console.log("Server is running on CLOUD on Port: ", port)
  } else {
    console.log("Server is running LOCALLY on Port: ", port)
  }
})
