var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var slackbotRouter = require('./routes/slackbot');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/slackbot', slackbotRouter);

module.exports = app;
