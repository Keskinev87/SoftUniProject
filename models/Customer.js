/**
 * Created by Yavor on 13-Dec-16.
 */
/**
 * Created by Yavor on 13-Dec-16.
 */
const mongoose = require('mongoose');

let customerSchema = mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        telephone: {type: String, required: false},
        address: {type: String, required: false},
        pin: {type: String, required: false},
    }
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;



