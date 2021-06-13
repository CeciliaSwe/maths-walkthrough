//Wait for DOM to load, then run game
//Get button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});
/**
 * The main game loop, called when the script is first loaded
 *  and after the user's answer has been processed
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game ${gameType}`);
        throw `Unknown game ${gameType}. Aborting!`;
    }

}
/**Check answer against user answer . calculatesAnswer returns array >> define index*/
function checkAnswer() {
    let userValue = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userValue === calculatedAnswer[0];

    if (isCorrect) {
        alert("That is correct mate!");
        incrementScore();
    } else {
        alert(`Sorry, please come again. Correct answer was ${calculatedAnswer[0]} :/`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);


}
/** Get operands (numbers) and operator from the DOM then return answer */

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Not calculated ${operator}`);
        throw `Unimplemented ${operator}. Aborting!`;
    }

}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
        

}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}


function displayAdditionQuestion(operand1, operand2)  {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion () {
    
}

function displayMultiplyQuestion () {
    
}

function displayDivisionQuestion () {
    
}