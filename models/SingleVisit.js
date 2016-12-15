/**
 * Created by Yavor on 15-Dec-16.
 */
const mongoose = require('mongoose');

let singleVisitSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        duration: {type: Number, required: true},
        color: {type: String, required: false},
    }
);

const singleVisit = mongoose.model('SingleVisit', singleVisitSchema);

module.exports = singleVisit;
