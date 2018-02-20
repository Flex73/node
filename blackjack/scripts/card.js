class Card {

	constructor(faces, suites) {
	  this.faces = faces;
	  this.suites = suites;
	}
  
  }
  
  Card.prototype.faces = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];
  
  Card.prototype.suites = [ 'Hearts', 'Spades', 'Diamonds', 'Clubs' ];

module.exports = Card;