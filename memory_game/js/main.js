let cards = ["queen", "queen", "king", "king"];
let cardsinPlay = [];
let cardOne = cards[0];
let cardTwo = cards[2];

cardsinPlay.push(cardOne);
cardsinPlay.push(cardTwo);
console.log(cardsinPlay);

if (cardsinPlay.length == 2) {
        if (cardsinPlay[0] === cardsinPlay[1]) {
          alert("Match found!"); }
        else {
          alert("Match not found. Try Again");
        }
      }
