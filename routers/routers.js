require('express');
const { AuthRouter } = require('./auth.router');
const { ApiRouter } = require('./api.router');

/**
 * 
 * @param {Express.Application} app 
 */
function addRoutes(app) {
    app.use('/auth', AuthRouter);
    app.use('/api', ApiRouter);
}

module.exports = {
    addRoutes,
};
