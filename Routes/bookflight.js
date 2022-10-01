const { json } = require('body-parser');
const express = require('express');
const Router = express.Router();
const fbmodel = require('../model/bookflightmodel');
const fmodel = require('../model/flightmodel')


Router.post('/bookflight/:flightno', (req, res) => {
    const data = req.params.flightno
    const jd = fmodel.find({ flightno: data }).then((res) => console.log(res)).catch((error) => console.log(error))

    const booked = new fbmodel({
        bflightno: { flightno: jd.flightno },
        btravel_btw_cities: { travel_btw_cities: jd.travel_btw_cities },
        bflight_timmings: { flight_timmings: jd.flight_timmings },
        bplaneCategory: { planeCategory: jd.planeCategory }

    })

    const jdata = JSON.stringify({ results: 'boooooooo' });
    booked
        .save()
        .then(results => res.send(jdata))
        .catch(error => console.log(error));

    res.send(JSON.stringify(jd))
});
module.exports = Router;