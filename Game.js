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
var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!"
    }
    if (choice1 == "rock") {
        if (choice2 == "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    if (choice1 == "paper") {
        if (choice2 == "rock") {
            return "paper wins";
        }
        if (choice2 == "scissors") {
            return "scissors wins";
        }
    }
    if (choice1 == "scissors") {
        if (choice2 == "rock") {
            return "rock wins";
        }
        if (choice2 == "paper") {
            return "scissors wins";
        }
    }
};

compare(userChoice, computerChoice);