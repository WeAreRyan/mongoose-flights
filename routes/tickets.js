const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');
const flightsCtrl = require('../controllers/flights');

router.get('/', ticketsCtrl.index);
router.get('/:id', ticketsCtrl.show);




router.post('/', ticketsCtrl.create);
router.post('/flights/:id/tickets', ticketsCtrl.addToTickets);

module.exports = router;