let cards = ["queen", "queen", "king", "king"];
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
console.log("User flipped " + cards[cardId]);
cardsinPlay.push(cards[cardId]);
checkMatch();
}



let cardOne = cards[0];
let cardTwo = cards[2];
console.log(cardsinPlay);
flipCard (0);
flipCard (1);
