const express = require("express")
const mongoose = require("mongoose")

const server = express()
server.use(express.json())

const port = process.env.PORT || 3002

server.listen(port, () => {
  console.log("server listening on port", port)
})
