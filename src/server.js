const express = require("express")
const mongoose = require("mongoose")
const listEndpoints = require("express-list-endpoints")

const server = express()
server.use(express.json())

const port = process.env.PORT || 3002

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
    server.listen(port, () => {
      console.log("server running on port", port)
    })
  } catch (error) {
    console.log(error)
  }
}

connectDb()
