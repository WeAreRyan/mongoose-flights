const mongoose = require('mongoose');
const flights = require('../controllers/flights');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], 
    }, 
    arrival: {
        type: Date, 
    }
})



const flightSchema = new Schema({
    airline: {
        type: String, 
        required: true, 
        enum: ['American', 'Southwest', 'United']
    }, 
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], 
        default: 'DEN'
    }, 
    flightNo: {
        type: Number, 
        required: true, 
        min: 10, 
        max: 9999
    }, 
    departs: {
        type: Date, 
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }},
    destinations: [destinationSchema], 

    tickets: [{type: Schema.Types.ObjectId, ref: "Seat"}],
}); 

module.exports = mongoose.model('Flight', flightSchema);
