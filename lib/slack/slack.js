const debug = require('debug')('slackbot-service:slack/slack');
const { WebClient } = require('@slack/client');

const webClient = new WebClient(process.env.BOT_TOKEN);

function processEvent(event) {
  debug(event);

  if (event.type === 'app_mention') {
    if (event.text.includes('tell me a joke')) {
      webClient.chat.postMessage({ channel: event.channel, text: 'Hello there' })
        .then((res) => {
          debug('Message sent: ', res.ts);
        })
        .catch(error => debug(error));
    }
  }
}

module.exports = {
  processEvent,
};
