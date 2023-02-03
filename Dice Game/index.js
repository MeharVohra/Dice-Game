
// create a random number between 0 - 0.9999999
// var randomNumber = Math.random();

// # convert it to range 0-5.99999
// randomNumber = Math.random() * 6;

// Round it Off to the range 0-5
// randomNumber = Math.floor(Math.random() * 6);

// add one to it to create the random numbers in the range 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Pick the dice image according to random number generated

var randomDice = "dice" + randomNumber1 + ".png";

// change the image source

var randomImageSource = "images/" + randomDice;

// select all the img tags and tap into the first one (there are 2 img tags)

var img1 = document.querySelectorAll("img")[0]

//  change the source of first img tag to randomImageSource

img1.setAttribute("src", randomImageSource)

// create the same function for the second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDice2;
var img2 = document.querySelectorAll("img")[1]
img2.setAttribute("src", randomImageSource2)

// check which player won

if (randomNumber1 > randomNumber2) {
    // since there's only a singe h1 tag, we'll use the function querySelector()
    // Then we'll change the h1 text to Player 1 Wins!
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}