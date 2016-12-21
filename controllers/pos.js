/**
 * Created by Yavor on 16-Dec-16.
 */
/**
 * Created by Yavor on 16-Dec-16.
 */
const Mongoose = require('mongoose')
const Customer = Mongoose.model('Customer')
const singleVisit = Mongoose.model('SingleVisit')
const Transaction = Mongoose.model('Transaction')


module.exports = {
    initialView: (req, res) => {
        if (!req.isAuthenticated()){
            let returnUrl = '/pos/initialview';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }
        singleVisit.find({}).then(singleVisit => {
            res.render('pos/baseview', {singleVisit: singleVisit})
        })
    },
    reportTransaction: (req, res) => {
        if(!req.isAuthenticated()) {
            let returnUrl = '/pos/initialview';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        let transactionArgs = req.body;

        Transaction.create(transactionArgs).then(res.redirect('/pos/initialview'))
    }
}