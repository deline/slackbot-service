const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const slackbotRouter = require('./routes/slack');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/slack', slackbotRouter);

module.exports = app;
