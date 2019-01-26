 // Array created that lists out all of the options.
 var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


 // Variables created to hold the numbers of wins, losses, and guesses left.
 var wins = 0;
 var losses = 0;
 var guessLeft = 10;

 // Variables created that hold references to the places in the HTML where we want to display things.
 // var winsText;
 // var lossesText;
 // var guessLeftText;
 // var guessesMade;

 // Randomly chooses a choice from the options array. This is the computer's guess.
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

 var userLetterArray = [];

 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

     // Determines which key was pressed.
     var userGuess = event.key;

     userGuess = userGuess.toUpperCase();

     

     

     // This logic determines the outcome of the game (win/loss), and increments the appropiate number
     if ( computerChoices.includes(userGuess)){  
         if ( guessLeft > 1) {
             
             if (userLetterArray.includes(userGuess)) {
                 alert("You already picked that letter!");
             } else {
                 
                 userLetterArray.push(userGuess);
                 
                 if (userGuess === computerGuess) {
                 wins++;
                 guessLeft = 10;
                 computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                 userLetterArray = [];
                 }
                 
                 else {
                 guessLeft --;
                 }
             }
             
         } else {
             losses ++;
             guessLeft = 10;
             computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
             userLetterArray = [];
         }
         

     } else {
         alert("It is not an Alphabet");
     }     
 
    

     console.log("user-guess: " + userGuess); 
     console.log("computer-guess: " + computerGuess);
     console.log("wins: " + wins);
     console.log("losses: " + losses);
     console.log("guess- left: " + guessLeft);
     console.log("user-letter-array: " + userLetterArray);
     
     document.getElementById("wins-text").innerHTML = wins;
     document.getElementById("losses-text").innerHTML = losses;
     document.getElementById("userguessleft").innerHTML = guessLeft;
     document.getElementById("guessesmade-text").innerHTML = userLetterArray;
    
    


 };