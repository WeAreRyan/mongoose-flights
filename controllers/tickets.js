const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    index, 
    create, 
    addToTickets,
    new: newTicket, 
}

function index(req, res) {
    Ticket.find({}, function(err, tickets) {
        res.render('tickets/index', {
            tickets
        })
    })
}


function newTicket(req, res) {
    flightId = req.params.id;
    res.render('tickets/new')
}

function create(req, res) {
    const ticket = new Ticket(req.body);
    console.log(ticket);
    ticket.save(function(err) {
        if(err) {
            console.log(err)
        }
    })
}



function addToTickets(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        // console.log(req.body)
        flight.ticket.push(req.body.ticketId)
        flight.save(function(err) {
            res.redirect(`/flights/${flights_id}`)
        })
    })
}