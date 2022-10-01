const express = require('express')
const bp = require("body-parser")
const server = express()

server.use(bp.json())


const addfdetails = require("./Routes/addfdetails")
const getfdetails = require("./Routes/getfdetails")
const bookflights = require("./Routes/bookflight")

server.use("/", addfdetails)
server.use("/", getfdetails)
server.use("/", bookflights)



server.listen(3010, () => {
    console.log("listning at port 3010");
})