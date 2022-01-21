const planets = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Pluto", "Uranus", "Neptune", "Pluto", "North Node", "South Node"]
const signs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"]
const houses = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

//Random number Generator
function rand() {
    return Math.floor(Math.random() * 12)
}

function rollTheDice() {
    let diceCombo = `${planets[rand()]}${signs[rand()]}${houses[rand()]}`
    return diceCombo
}

rollTheDice()