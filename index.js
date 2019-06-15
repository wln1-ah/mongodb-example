require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');

const { decorate } = require('./middleware/decorate.middleware');
const { addRoutes } = require('./routers/routers');

const mongoose = require('mongoose');
const User = require('./db/models/User');

mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => {
        console.log('connected to the database');
    })
    .catch(err => {
        console.error('Error connecting to the database');
        console.error(err);
    });

const app = express();

require('./auth/passport.auth');

decorate(app);
addRoutes(app);

app.listen(process.env.PORT, () => {
    console.log('Started app');
});
