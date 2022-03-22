const siteRoute = require('./siteRoute');
const categoryRoute = require('./categoryRoute')
const manageRoute = require('./manageRoute');
function route(app){
    app.use('/categories', categoryRoute);
    app.use('/me',manageRoute);
    app.use('/', siteRoute);
}

module.exports = route;