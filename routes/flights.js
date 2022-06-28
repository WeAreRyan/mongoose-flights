var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ticketsCtrl = require('../controllers/tickets');

// get routes
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.get('/:id/tickets', ticketsCtrl.new);

// create routes
router.post('/', flightsCtrl.create);


module.exports = router;