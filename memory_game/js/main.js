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
  //this.setAttribute('src', cards[cardId].cardImage);
  if (cardsinPlay.length == 2) {
            if (cardsinPlay[0] === cardsinPlay[1]) {
              alert("Match found!"); }
            else {
              alert("Match not found. Try Again");
            }
          }
}

function flipCard () {
cardId = this.getAttribute('data-id');
console.log("User flipped " + cardId);
cardsinPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].rank);
checkMatch();
}

function createBoard () {
  for (var i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);

  }


}

createBoard();
