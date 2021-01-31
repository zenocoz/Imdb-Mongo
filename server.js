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

const server = express()
server.use(express.json())
server.use(cors())

//routes
const services = require("./src/services")
server.use("/imdb", services)

//ERROR HANDLING MIDDLEWARES
server.use(notFoundHandler)
server.use(badRequestHandler)
server.use(forbiddenHandler)
server.use(unAuthorizedHandler)
server.use(genericHandler)

console.log(listEndpoints)

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_ATLAS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    const db = mongoose.connection
    db.once("open", () => {
      console.log("we're connected!")
    })
    const port = process.env.PORT || 3002

    server.listen(port, () => {
      console.log("server running on port", port)
    })
  } catch (error) {
    console.log(error)
  }
}

connectDb()
