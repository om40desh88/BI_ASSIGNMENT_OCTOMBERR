const express = require('express');
const Router = express.Router();
const fmodel = require('../model/flightmodel');

Router.get('/getflightdetails/:flightno', async (req, res) => {
    const gdata = req.params.flightno
    try {
        const result = await fmodel.findOne({
            flightno: gdata
        });
        res.send(result);
    } catch (e) {
        res.send('some error occured');
    }
});

module.exports = Router;