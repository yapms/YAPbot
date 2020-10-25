const discord = require('discord.js');
const client = new discord.Client();

const parser = require('./src/parser.js');
const moderator = require('./src/moderator.js');
const misc = require('./src/misc.js');
const game = require('./src/game.js');

const fs = require('fs');

var config = JSON.parse(fs.readFileSync('../external/yapbot_config.json'));

const token = config.token;

client.on('ready', ()=>{
	console.log('Client Is Online');
});

client.on('message', msg=>{
	moderator.filter.delete(msg);
	if(msg.content.startsWith('yap ') || msg.content === 'yap') {
		data = parser.parse(msg.content);
		react(data, msg);
	}
});

client.login(token);

function react(data, msg) {
	if(data[1] === 'invite') {
		msg.reply('https://discord.gg/kT9dMHY');
	} else if(data[1] === 'help') { 
		misc.help.display(msg.channel);	
	} else if(data[1] === 'start' && data[2] === 'game') {
		game.guessTheElection.start(msg);	
	} else if(data[1] === 'stop' && data[2] === 'game') {
		game.guessTheElection.stop(msg);	
	} else if(data[1] === 'guess') {
		game.guessTheElection.guess(msg);	
	} else if(data[1] === "timer" && Number.isInteger(parseInt(data[2])) && data[3] === "s") {
		var count = parseInt(data[2]);
		misc.timer.seconds(count, msg);
		msg.channel.send("Countdown started!");
	} else if(data[1] === "timer" && Number.isInteger(parseInt(data[2])) && data[3] === "m") {
		var count = parseInt(data[2]);
		misc.timer.minutes(count, msg);
		msg.channel.send("Countdown started!");
	} else {
		msg.reply(' this isn\'t a valid command');
	}
}
