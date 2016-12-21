const userController = require('./../controllers/user');
const homeController = require('./../controllers/home');
const customerController = require('./../controllers/customer')
const singleVisitsController = require('./../controllers/singleVisit')
const posController = require('./../controllers/pos')

module.exports = (app) => {
    app.get('/', homeController.index);

    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);

    app.get('/user/login', userController.loginGet);
    app.post('/user/login', userController.loginPost);

    app.get('/user/logout', userController.logout)
    app.get('/customers/all', customerController.viewall)
    app.get('/customers/create', customerController.createGet)
    app.post('/customers/create', customerController.createPost)
    app.get('/customers/details/:id', customerController.details)
    app.get('/singleVisits/all', singleVisitsController.viewall)
    app.get('/singleVisits/create', singleVisitsController.createGet)
    app.post('/singleVisits/create', singleVisitsController.createPost)
    app.get('/pos/initialview', posController.initialView)
    app.post('/pos/sell', posController.reportTransaction)
    app.get('/user/details/:id', userController.details)
};

