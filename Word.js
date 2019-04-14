let Letter = require('./Letter');

let life = 10;

let Word = function (secretWord) {
    let that = this;
    let letterArray = [];

    this.setup = function () {
        this.secretWord = secretWord;
        letters = this.secretWord.split("");
    
        for (let i = 0; i < letters.length; i++) {
            letterArray.push(new Letter(letters[i]));
        }
    
        this.display = function () { 
            let displayString = [];
            for (let i = 0; i < letterArray.length; i++) {
                
                if (letterArray[i].letter === " ") {
                    letterArray[i].check = true;
                    displayString.push (letterArray[i].letter);
                } else if (letterArray[i].letter === ",") {
                    letterArray[i].check = true;
                    displayString.push (letterArray[i].letter);
                } else {
                    if (letterArray[i].check === false) {
                        displayString.push ("_")
                    } else {
                        displayString.push (letterArray[i].letter);
                    }    
                }
            }   
            console.log (displayString.join(" "));
            
        }
    }

    this.check = function (guessLetter) {
        let match = false
        for (let i = 0; i < letterArray.length; i++) {
            if (guessLetter === letterArray[i].letter) {
                letterArray[i].check = true;
                match = true;
            } 
        }
        if (match === false) {
            life--;
            console.log (life + " lifes Left!")
        }
        that.display ();

    }
        
    this.win = function () {

        winningCondition = true;
        if (life > 0) {
            for (let i = 0; i < letterArray.length; i++) {
                if (letterArray[i].check === false) {
                    winningCondition = false;
                    return false;
                } 
            }
        } else {
            return null
        }
    }
}

module.exports = Word;
