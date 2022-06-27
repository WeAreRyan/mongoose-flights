const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight, 
    create, 
    show, 
    new: newTicket, 
}


// Flights index page
function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights
        })
    })
}

// New flight page render
function newFlight(req, res) {
    res.render('flights/new')
}

function newTicket(req, res) {
    res.render('tickets/new')
}

// Creates and adds new flight in database
function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if(err) {
            console.log(err)
        }
    })
    res.redirect('/flights');
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: 'Flight Details', flight});
    });
}