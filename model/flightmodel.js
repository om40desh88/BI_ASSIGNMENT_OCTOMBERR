const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Tigrisaviation").then((res) => console.log(res)).catch((error) => console.log(error))

const fmo = mongoose.Schema
const schemamodel = new fmo({
    flightno: Number,
    travel_btw_cities: String,
    flight_timmings: String,
    planeCategory: String
})

const fmodel = mongoose.model("flights", schemamodel)
module.exports = fmodel

