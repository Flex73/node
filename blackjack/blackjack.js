const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const Deck = require('./scripts/deck.js');
const Hand = require('./scripts/hand.js');

const deck = new Deck().shuffle();

const player1 = new Hand();

player1.add(deck.draw());
player1.add(deck.draw());

const play = function() {
	console.log(player1.toString());

	readline.question("[H]it or [S]tay? ", function(answer) {
		if (answer == 'h' || answer == 'H') {
			player1.add(deck.draw());

			if (player1.bust()) {
				console.log("BUST!");
				console.log(player1.toString());
				readline.close();
			} else {
				console.log("HITTING!");
				play();
			}
		} else if (answer == 's' || answer == 'S') {
			console.log("STAYING!");
			console.log(player1.toString());
			readline.close();
		}
	});
}

play();