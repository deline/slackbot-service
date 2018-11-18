const debug = require('debug')('slackbot-service:slack/slack');
const { WebClient } = require('@slack/client');

const webClient = new WebClient(process.env.BOT_TOKEN);

function processEvent(event) {
  debug(event);

  let responseText;
  let attachments;

  if (event.type === 'app_mention') {
    if (event.text.includes('Hello')) {
      responseText = `Hello <@${event.user}>!`;
    }

    if (event.text.includes('survey')) {
      responseText = 'How are you feeling?';
      attachments = [
        {
          fallback: 'You are unable to select a result',
          callback_id: 'feeling',
          color: '#3AA3E3',
          attachment_type: 'default',
          actions: [
            {
              name: 'currentFeeling',
              text: 'Sad',
              type: 'button',
              value: 'sad',
            },
            {
              name: 'currentFeeling',
              text: 'Average',
              type: 'button',
              value: 'average',
            },
            {
              name: 'currentFeeling',
              text: 'Happy',
              type: 'button',
              value: 'happy',
            },
          ],
        },
      ];
    }
  }

  webClient.chat.postMessage({ channel: event.channel, text: responseText, attachments })
    .then((res) => {
      debug('Message sent: ', res.ts);
    })
    .catch(error => debug(error));
}


module.exports = {
  processEvent,
};
