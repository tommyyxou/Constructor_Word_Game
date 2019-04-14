let Word = require('./Word');

let wordLibrary = [
                    "Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons", 
                    "Jon Snow of the House Stark, first of his name, King in the North, King Beyond the Wall, Lord of Winterfell, the White Wolf and the Undead", 
                    "Cersei of the House Lannister,Protector of the Realm, Lady Paramount of the Westerlands, Lady of Casterly Rock, Light of the West, Queen Dowager and Queen Regent ", 
                    "Ramsay of the House Bolton, Lord of Winterfell, Castellan of the Dreadfort, Lord of the Hornwood, Warden of the North and Lord Paramount of the North",
                    "Khal Drogo", 
                    "Brandon of the House Stark, Lord of Winterfell and Prince of Winterfell", 
                    "Petyr Baelish, Lord of Baelish Castle", 
                    "Eddard of the House Stark, Lord of Winterfell, Warden of the North, Hand of the King, Protector of the Realm and Lord Regent",
                    "Theon of the House Greyjoy, Captain of Sea Bitch",
                    "Tormund Giantsbane, Tall-talker, Horn-blower, and Breaker of Ice, Tormund Thunderfist, Husband to Bears, the Mead-king of Ruddy Hall, Speaker to Gods and Father of Hosts ",
                    "Jaime of the House Lannister, Ser Lord Commander of the Kingsguard and Warden of the East",
                    "Margaery Tyrell, Queen of the seven kingdoms",
                    "Joffrey of Houses Baratheon and Lannister, First of His Name, King of the Andals and the First Men, Lord of the Seven Kingdoms, and Protector of the Realm",
                    "Tyrion Lannister, Hand of the Queen",
                    "No One",
                    ];
let randomWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)].toLowerCase();

let ranWord = new Word (randomWord);
ranWord.setup();
ranWord.display();
recursion();

function recursion () {
  let inquirer = require('inquirer');
  let guessLetter = "";

  inquirer.prompt({
      type: 'input',
      name: 'letterGuessed',
      message: 'Guess a letter!'
  })
    .then(answers => {
      guessLetter = answers.letterGuessed.slice(0,1);
      console.log ("letter guessed:",guessLetter);
      ranWord.check (guessLetter);
      
      if (ranWord.win() === false) {
         recursion ();
      } else if (ranWord.win() === undefined) {
        console.log ("You Win");
      } else if (ranWord.win() === null) {
        console.log ("You Lose!")
      }
    });
 };