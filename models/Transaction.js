/**
 * Created by Yavor on 16-Dec-16.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema

let transactionSchema = mongoose.Schema(
    {
        price: {type: Number, required: true},
        date: {type: String, required: true},
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
    }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;