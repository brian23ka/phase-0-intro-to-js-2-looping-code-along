// Code your solutions in this file
let cards =(["Charlie", "Samip", "Ali"],"birthday");
function writeCards(cards, event){
    let thankYouCards = [];
    for (let i = 0; i < cards.length; i++) {
        thankYouCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}
function countDown(number){
    while (number > 0){
        console.log(number);
        number -= 1;
    }
    console.log(number);
}   