var filterWords = ["nigger", "nig", "faggot", "fag", "testword"];

class Filter {
	delete(msg) {
		if(msg.content.includes("testword")) {
			msg.delete();
		}
	}
};

class Mute {
	seconds(sender, target, time) {

	}

	minutes(sender, target, time) {
		
	}
};

class Log {

};

module.exports = {
	mute: new Mute(),
	filter: new Filter(),
	log: new Log()
};
