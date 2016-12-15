/**
 * Created by Yavor on 13-Dec-16.
 */
const Mongoose = require('mongoose')
const Customer = Mongoose.model('Customer')

module.exports = {
    viewall: (req,res) => {
        Customer.find({}).then(customers => {
            res.render('customers/viewall', {customers: customers})
        })
    },
    createGet: (req, res) => {
        if (!req.isAuthenticated()){
            let returnUrl = '/customers/create';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        res.render('customers/create');
    },
    createPost: (req, res) => {
        if(!req.isAuthenticated()) {
            let returnUrl = '/customers/create';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        let customerArgs = req.body;

        let errorMsg = '';
        if (!customerArgs.firstName){
            errorMsg = 'Please enter First Name!';
        } else if (!customerArgs.lastName){
            errorMsg = 'Please enter Last Name!';
        }else if (!customerArgs.email){
            errorMsg = 'Please enter Email!';
        }

        if (errorMsg) {
            res.render('customer/create', {error: errorMsg});
            return;
        }

        Customer.create(customerArgs).then(res.redirect('/customers/all'))
    },

    details: (req, res) => {
        if(!req.isAuthenticated()) {
            let returnUrl = '/customers/details';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        Customer.findById(req.params.id).then(customer => {
            res.render('customers/details', {customer: customer})
        })
    }

}