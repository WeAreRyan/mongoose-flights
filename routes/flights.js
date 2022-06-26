var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// get routes
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);

// create routes
router.post('/', flightsCtrl.create);


module.exports = router;