const fs = require('fs');

class Help {
	display(channel) {
		channel.send("you're welcome");
	}
};

class Timer {
	seconds(count, msg) {
		setTimeout(function() {
			msg.reply(" timer finished!");	
		}, count * 1000);
	}

	minutes(count, msg) {
		setTimeout(function() {
			msg.reply(" timer finished!");	
		}, count * 1000 * 60);
	}
}

module.exports = {
	help: new Help(),
	timer: new Timer()
};
