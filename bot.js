const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Dz Pro Gamers!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(R0-BHZqGVI9FlLxlAZKpb-KKjDLhlkR5);
