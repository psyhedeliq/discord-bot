// Run dotenv
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('message', (msg) => {
//   console.log({ msg });
//   // if (msg.content === 'ping') {
//   msg.reply('pong');
//   // }
// });

client.on('messageCreate', (message) => {
  console.log({ message });
  // if (message.author.bot) return;
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(process.env.DISCORD_TOKEN);

// client.once('ready', () => {
//   console.log('Ready!');
// });

// client.on('interactionCreate', (interaction) => {
//   console.log(interaction);
// });

// client.on('messageCreate', (message) => {
//   console.log(message);
// });

// client.login(process.env.DISCORD_TOKEN).then(console.log);
