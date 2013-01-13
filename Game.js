/**
 * Created with JetBrains WebStorm.
 * User: David
 * Date: 12/01/13
 * Time: 22:24
 * To change this template use File | Settings | File Templates.
 */

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
var compare = function (firstChoice, secondChoice) {
    if (firstChoice === secondChoice) {
        return "The result is a tie!"
    }
    if (firstChoice == "rock") {
        if (secondChoice == "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    if (firstChoice == "paper") {
        if (secondChoice == "rock") {
            return "paper wins";
        }
        if (secondChoice == "scissors") {
            return "scissors wins";
        }
    }
    if (firstChoice == "scissors") {
        if (secondChoice == "rock") {
            return "rock wins";
        }
        if (secondChoice == "paper") {
            return "scissors wins";
        }
    }
};

compare(userChoice, computerChoice);