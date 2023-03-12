const TelegramBot = require('node-telegram-bot-api');

const token = '6265423552:AAEHqRLTWZrPjaApcWmofL-WGl8j8kehh6Y';

const m = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const jid = msg.chat.id;
  const message = msg.text;
  
  if (message === '/start') {
    m.sendMessage(jid, 'Hello! Welcome to my auto-reply bot!');
  } else {
    m.sendMessage(jid, 'Sorry, I didn\'t understand that message. Please try again.');
  }
});
