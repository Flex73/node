const Card = require('./card.js');
const CardCollection = require('./cardCollection.js');

const Deck = function() {
	const self = this;

	Card.prototype.suites.forEach(function(suites) {
		Card.prototype.faces.forEach(function(faces) {
			self.cards.push(new Card(faces, suites));
		});
	});
};

Deck.prototype = new CardCollection();
Deck.prototype.constructor = Deck;

Deck.prototype.draw = function() {
	return this.cards.pop();
};

Deck.prototype.shuffle = function() {
	for (let j, x, i = this.cards.length; i; j = Math.floor(Math.random() * i), x = this.cards[--i], this.cards[i] = this.cards[j], this.cards[j] = x);

	return this;
};

module.exports = Deck;