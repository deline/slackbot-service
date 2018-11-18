const express = require('express');
const debug = require('debug')('slackbot-service:routes/slack');
const slack = require('../slack/slack.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.post('/events', (req, res) => {
  const { challenge } = req.body;
  if (challenge) {
    res.json({ challenge });
  } else {
    res.sendStatus(200);

    slack.processEvent(req.body.event);
  }
});


module.exports = router;
