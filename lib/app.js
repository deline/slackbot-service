const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const slackbotRouter = require('./routes/slackbot');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/slackbot', slackbotRouter);

module.exports = app;
