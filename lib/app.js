require('dotenv').config();
const debug = require('debug')('slackbot-service:app');
const express = require('express');
const logger = require('morgan');
const { createMessageAdapter } = require('@slack/interactive-messages');

const indexRouter = require('./routes/index');
const slackbotRouter = require('./routes/slack');
const slack = require('./slack/slack');

const slackInteractions = createMessageAdapter(process.env.SLACK_SIGNING_SECRET);

const app = express();

app.use(logger('dev'));
app.use('/slack/actions', slackInteractions.expressMiddleware());
app.use(express.json());
app.use('/', indexRouter);
app.use('/slack', slackbotRouter);

slack.registerInteractions(slackInteractions);

module.exports = app;
