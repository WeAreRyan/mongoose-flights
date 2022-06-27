const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    index, 
    create, 
    addToTickets,
    show,
}

function index(req, res) {
    Ticket.find({}, function(err, tickets) {
        res.render('tickets/index', {
            tickets
        })
    })
}

function show(req, res) {
    Ticket.findById(req.params.id, function(err, ticket) {
        res.render('tickets/show', {title: 'Ticket Details', ticket});
    });
}


function create(req, res) {
    const ticket = new Ticket(req.body)
    ticket.save(function(err) {
        if(err) {
            console.log(err)
        }
    })
    res.redirect(`/flights/${flights._id}`);
}

function addToTickets(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log(req.params.id,)
        // console.log(req.body)
        flight.ticket.push(req.body.ticketId)
        flight.save(function(err) {
            res.redirect(`/flights/${flights_id}`)
        })
    })
}