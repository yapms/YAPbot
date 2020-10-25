class GuessTheElection {
	GuessTheElection() {
		this.running = false;
		this.guesses = [];
	}

	start(msg) {
		msg.channel.send("Start Guessing!");
		this.running = true;
		this.guesses = [];	
	}

	stop(msg) {
		if(this.running == false || this.running == undefined) {
			msg.channel.send("There is no game running.");
			return;
		}

		this.running = false;
		console.log(this.guesses);
		var data = "";
		for(var guess of this.guesses) {
			data += guess['author'].toString() + " " + guess['text'] + "\n";	
		}
		this.guesses = [];
		msg.channel.send(data);
	}

	guess(msg) {
		if(this.running == true) {

			if(this.alreadyGuessed(msg)) {
				msg.reply("you already guessed");
				return;
			}

			var content = msg.content.split(" ")[2];
			var guess = {};
			guess['author'] = msg.author;
			guess['text'] = content;
			console.log(guess);
			this.guesses.push(guess);
			console.log(this.guesses);
		}
	}

	alreadyGuessed(msg) {
		for(var guess of this.guesses) {
			if(guess['author'].id === msg.author.id) {
				return true;
			}
		}

		return false;
	}
};

module.exports = {
	guessTheElection: new GuessTheElection()
};
