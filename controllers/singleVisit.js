/**
 * Created by Yavor on 15-Dec-16.
 */
const Mongoose = require('mongoose')
const singleVisit = Mongoose.model('SingleVisit')

module.exports = {
    viewall: (req, res) => {
        singleVisit.find({}).then(singleVisit => {
            res.render('singleVisits/viewall', {singleVisit: singleVisit})
        })
    },
    createGet: (req,res) => {
        if (!req.isAuthenticated()){
            let returnUrl = '/singleVisits/create';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        res.render('singleVisits/create');
    },
    createPost: (req,res) => {
        if(!req.isAuthenticated()) {
            let returnUrl = '/singleVisits/create';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        let singleVisitArgs = req.body;

        let errorMsg = '';
        if (!singleVisitArgs.name){
            errorMsg = 'Please enter a Name!';
        } else if (!singleVisitArgs.duration){
            errorMsg = 'Please enter Duration!';
        }else if (isNaN(singleVisitArgs.duration)){
            errorMsg = 'Please enter a number in minutes!'
        }else if (!singleVisitArgs.price){
            errorMsg = 'Please enter Email!';
        }else if (isNaN(singleVisitArgs.price)){
            errorMsg = 'Please enter a number!'
        }

        if (errorMsg) {
            res.render('singleVisits/create', {error: errorMsg});
            return;
        }

        singleVisit.create(singleVisitArgs).then(res.redirect('/singleVisits/all'))
    },
    details: (res, req) => {
        if(!req.isAuthenticated()) {
            let returnUrl = '/singleVisits/details';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        singleVisit.findById(req.params.id).then(singleVisit => {
            res.render('singleVisits/details', {singleVisit: singleVisit})
        })
    }
}