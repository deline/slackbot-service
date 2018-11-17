const express = require('express');
const debug = require('debug')('slackbot-service:slack');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.post('/events', (req, res) => {
  const { challenge } = req.body;
  if (challenge) {
    res.json({ challenge });
  } else {
    res.json({ status: 'OK' });
  }
});


module.exports = router;
