class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if(!this.cards) {
      return undefined;
    }
    // ... write your code here
    for (let i = this.cards.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; 
    } 
    return this.cards; 
  
  }
        //ex:ironman,batman
  checkIfPair(card1, card2) {
    // ... write your code here
    this.card1 = card1;
    this.card2 = card2;

    this.pairsClicked = 1;
    
    if(this.card1 === this.card2) {
      this.pairsGuessed = 1;
      return true
    } else if(this.card1 !== this.card2) {
      return false
    }
  }
  

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === 0 ) {
      return false
    } else if (this.pairsGuessed < this.cards) { 
      return false
    } else {
      return true
    }

  }
}





