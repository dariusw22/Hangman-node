// dependency for inquire npm package.
var inquirer = require('inquirer');

// dependency for prompt npm package.
var prompt = require('prompt');

// display the blank placeholder. 
function Letter(star, guess, placeholder, placeHolder2) {
    this.star = ("*");
    this.guess = true;
    this.placeHolder = function() {
        // returns the star param if letter has been guessed. 
        if (star === star) {
            console.log(star);
        }
    }
    this.placeHolder2 = function() {
        // takes a character as an argument and checks it against the character, updating the stored boolean value if it ws guesses correctly.
    }
}
Letter();

//console.log(star);

