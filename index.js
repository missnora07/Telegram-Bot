const TelegramBot = require('node-telegram-bot-api');

const token = '6265423552:AAEHqRLTWZrPjaApcWmofL-WGl8j8kehh6Y';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const jid = msg.chat.id;
  const messageText = msg.text;
  
  if (messageText === '/start') {
    bot.sendMessage(jid, 'Hello! Welcome to my auto-reply bot!');
  } else {
    bot.sendMessage(jid, 'Sorry, I didn\'t understand that message. Please try again.');
  }
});
