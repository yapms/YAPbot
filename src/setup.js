module.exports = {
	setlog: function(channel) {
		console.log("muted " + user + time);	
	},
	filter: function(msg) {
		if(msg.content.includes("testword")) {
			msg.delete();
		}
	},
	log: function(message) {
		
	}
};
