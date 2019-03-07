// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in  Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in  Letter.js)

// should require letter.js
const letter = require('letter.js')

function Word() {
    // an array of new letter options representing the underlying word 
    const letterObjects = ['football', 'node', 'javascript', 'durham']; 
    
    // a function that returns a string made of the place holders  created in letter.js
    function return() {
        // variable that holds string value of the word. 
        const word = 
        return word;
    }
    // a function that takes a character as an argument and calls the guess function on each letter object. 
    function(char) {
        console.log(guess)
    }
}