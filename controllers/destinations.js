const flight = require('../models/flight')

module.exports = {
    create, 
}

function create(req, res) {
    flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        console.log(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

