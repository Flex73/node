const Card = require('./card.js');
const CardCollection = require('./cardCollection.js');

const Hand = function() { };

Hand.prototype = new CardCollection();
Hand.prototype.constructor = Hand;

Hand.prototype.limit = 21;

Hand.prototype.add = function(card) {
	if (!card instanceof Card) {
		throw new Error("Tried adding a non card to hand!");
	}

	this.cards.push(card);
};

Hand.prototype.score = function() {
	let score = 0, aces = 0;

	this.cards.forEach(function(card) {
		if (card.faces == 'A') {
			aces++;
		}

		if (card.faces == 'J' || card.faces == 'Q' || card.faces == 'K') {
			score += 10;
		} else if (card.faces == 'A') {
			score += 11;
		} else {
			score += parseInt(card.faces, 10);
		}
	});

	while (score > 21 && aces > 0) {
		score -= 10;
		aces--;
	}

	return score;
};

Hand.prototype.toString = function() {
	let string = "Your Hand:\n";

	this.cards.forEach(function(card) {
		string += "  " + card.faces + " of " + card.suites + "\n";
	});

	string += "Total Points: " + this.score() + "\n";

	return string;
};

Hand.prototype.bust = function() {
	return this.score() > this.limit;
};

module.exports = Hand;