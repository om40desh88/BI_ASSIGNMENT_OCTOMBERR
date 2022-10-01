const express = require('express');
const Router = express.Router();
const fmodel = require("../model/flightmodel")


Router.post("/addflights", (req, res) => {
    const fdata = req.body
    const flights = new fmodel({
        flightno: fdata.flightno,
        travel_btw_cities: fdata.travel_btw_cities,
        flight_timmings: fdata.flight_timmings,
        planeCategory: fdata.planeCategory
    })
    const jdata = JSON.stringify({ result: 'Success' });
    flights
        .save()
        .then(result => res.send(jdata))
        .catch(error => console.log(error));

})
module.exports = Router