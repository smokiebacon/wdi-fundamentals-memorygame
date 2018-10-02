let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"

  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-hearts.png"
  }
];



let cardsinPlay = [];


function checkMatch() {
  if (cardsinPlay.length == 2) {
            if (cardsinPlay[0] === cardsinPlay[1]) {
              alert("Match found!"); }
            else {
              alert("Match not found. Try Again");
            }
          }
}

function flipCard (cardId) {
console.log("User flipped " + cards[cardId].rank);
cardsinPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].rank);
checkMatch();
}


console.log(cardsinPlay);
flipCard (0);
flipCard (2);
