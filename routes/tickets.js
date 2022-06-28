var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');
const flightsCtrl = require('../controllers/flights');

router.get('/', ticketsCtrl.index);
router.get('/flights/:id/tickets/new', ticketsCtrl.new);


router.post('/tickets/:id/tickets/new', ticketsCtrl.create);
// router.post('/flights/:id/tickets', ticketsCtrl.addToTickets);

///flights/:id


module.exports = router;