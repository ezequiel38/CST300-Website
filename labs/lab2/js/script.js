//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts;
let totalWins = 0;
let totalLosses = 0;

initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";

   //showing the guess button
   document.querySelector("#guessBtn").style.display = "inline";
  
   let playerguess = document.querySelector("#playerGuess");
   playerguess.focus();     // adding focus to text box
   playerguess.value = "";  // clearing the textbox

   let feedback = document.querySelector("#feedback");
   feedback.textContent = "";   // clearing the feedback

   let attemptLeft = document.querySelector("#attemptLeft");
   attemptLeft.textContent = "Attempts left: " + (7 - attempts);

   // clearing previous guesses
   document.querySelector("#guesses").textContent = "";

   // hiding correct number text
   let randNum = document.querySelector("#randNum");
   randNum.textContent = "";

   let totalWinsDisplay = document.querySelector("#totalWins");
   let totalLossesDisplay = document.querySelector("#totalLosses");
   totalWinsDisplay.textContent = "Total Wins: " + totalWins;
   totalLossesDisplay.textContent = "Total Losses: " + totalLosses;

}

function checkGuess(){
    let totalWinsDisplay = document.querySelector("#totalWins");
    let totalLossesDisplay = document.querySelector("#totalLosses");
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99){
        feedback.textContent = "Enter a  number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    let attemptLeft = document.querySelector("#attemptLeft");
    attemptLeft.textContent = "Attempts left: " + (7 - attempts);
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";
    if(guess == randomNumber) {
        feedback.textContent = "You guessed it! You won!";
        feedback.style.color = "darkgreen";
        totalWinsDisplay.textContent = "Total Wins: " + ++totalWins;
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7) {
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
            totalLossesDisplay.textContent = "Total Losses: " + ++totalLosses;
            let randNum = document.querySelector("#randNum");
            randNum.textContent = "The correct number is " + randomNumber;
            gameOver()
        } else if (guess > randomNumber) {
            feedback.textContent = "Guess was too high";
        } else {
            feedback.textContent = "Guess was too low";
        }
    }
}

function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}