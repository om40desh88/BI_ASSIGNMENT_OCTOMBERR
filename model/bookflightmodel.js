const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/bookings").then((res) => console.log("booked")).catch((error) => console.log("Flight Not Available"))

const book = mongoose.Schema
const schemamodelbook = new book({
    bflightno: Object,
    btravel_btw_cities: Object,
    bflight_timmings: Object,
    bplaneCategory: Object
})

const fbmodel = mongoose.model("flightsbook", schemamodelbook)
module.exports = fbmodel
