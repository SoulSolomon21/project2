let player = {
    name: "Soul",
    chips: 145
}
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let cards = []
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
//another way of selecting elements from the DOM
//this method is a little more dynamic and so we need to specify the value we pass into it as shown with the # on the id name
let sumEl = document.querySelector("#sum-el")
//here we are asking for the element by its selector
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
//the line below renders information from the player object into the player-el element
playerEl.textContent = player.name + ": $" + player.chips

//the function below returns a random value from 1 to 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber >= 11 && randomNumber <= 13 ) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = " Do you want to draw a new card"
        isAlive = true
    } else if (sum === 21) {
        hasBlackjack = true
        message = " You've got Blackjack"
    } else {
        message = " You're out of the game"
        isAlive = false
    }
    // sumEl.textContent += sum
    //altenatively
    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message 
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        //here we are just adding the numbers to the cardsEl paragraph
        cardsEl.textContent += cards[i] + " "
    }
    //the above three lines work in such a way that the for loop just adds the numbers in the array after the word in the line above it
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard()
    sum += card
    // sumEl.textContent = "Sum: " + sum
    cards.push(card)
    //here we called the renderGame() function inside the newcard function  
    renderGame()
    }
}
























