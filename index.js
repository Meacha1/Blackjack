let hasBlackJack = false
let isAlive = false;
let message = ""
let sum = 0;
let cards = [];
let player = {
    name: prompt("Enter Your name"),
    chips:150
}
document.getElementById("player-el").textContent = player.name + ": $" + player.chips

function getRandomInt() {
    let num = Math.floor(Math.random() * (13)) + 1;
    if (num === 1){
        return 11;
    } else if (num > 10) {
        return 10;
    } else {
        return num;
    }
}
function startGame() {
    isAlive = true;
    let firstCard = getRandomInt(1, 13);
    let secondCard = getRandomInt(1, 11);
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    document.getElementById("cards-el").textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        document.getElementById("cards-el").textContent += cards[i] + " ";
    }
    document.getElementById("sum-el").textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    document.getElementById("message-el").textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomInt(1, 11);
    cards.push(newCard);

    sum += newCard;
    renderGame();
    }
}