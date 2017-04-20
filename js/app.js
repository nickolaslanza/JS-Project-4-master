// When the page loads, the startup screen should appear. Use the tictactoe-01-start.png mockup, and the start.txt HTML snippet to guide you.

(function IIFE(){

  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  const boxes = document.querySelector(".boxes").children;
  const screenPlayer1Input = document.createElement("input");
  const screenPlayer2Input = document.createElement("input");
  const player1name = document.querySelector(".name1");
  const player2name = document.querySelector(".name2");
  const body = document.querySelector("body");

//variables to create a screen;
  let screenOnLoad = document.createElement("div");
  let screenHeader = document.createElement("header");
  let screenH1 = document.createElement("h1");
  let screenbutton = document.createElement("button");
  let screenPlayer1Label = document.createElement("label");
  let screenPlayer2Label = document.createElement("label");
  let br = document.createElement("br");

function gameStart() {
  screenOnLoad.setAttribute("class", "screen screen-start");
  screenH1.textContent = "Tic Tac Toe";
  screenPlayer1Label.textContent = "Player 1: ";
  screenPlayer2Label.textContent = "Player 2: ";
  screenbutton.setAttribute("class", "button");
  screenbutton.textContent = "Start Game";
  screenOnLoad.appendChild(screenHeader);
  screenHeader.appendChild(screenH1);
  screenHeader.appendChild(screenPlayer1Label);
  screenHeader.appendChild(screenPlayer1Input);
  screenHeader.appendChild(screenPlayer2Label);
  screenHeader.appendChild(screenPlayer2Input);
  screenHeader.appendChild(br);
  screenHeader.appendChild(screenbutton);
  document.body.appendChild(screenOnLoad);

  // When the user clicks on start game, the values are then extracted from the inputs and placed on the screen underneath each x and o
  screenbutton.addEventListener("click", function() {

    screenOnLoad.remove();
    player1.classList.add("active");
    body.removeChild(screenOnLoad);
  });

}


let currentPlayer = "O";
let theBoard = [];
let playerShape = "";
let moveCount = 0;
const xWins = "XXX";
const oWins = "000";
const winner = "Winner!";
const lose = "Loser!";
const draw = "Draw";
const winnerScreen = "screen screen-win-one";
const loserScreen = "screen screen-win-two";
const drawScreen = "screen screen-win-tie";

let screenOnGame = document.createElement("div");
let screenGameHeader = document.createElement("header");
let screenGameh1 = document.createElement("h1");
let screenGameButton = document.createElement("button");
let screenP = document.createElement("p");

// Core logic of how to win on the gameboard;
function win(theBoard, winString) {
  let test = [];
  test[0] = ((theBoard[0] + theBoard[1] + theBoard[2]) === winString);
  test[1] = ((theBoard[3] + theBoard[4] + theBoard[5]) === winString);
  test[2] = ((theBoard[6] + theBoard[7] + theBoard[8]) === winString);
  test[3] = ((theBoard[0] + theBoard[3] + theBoard[6]) === winString);
  test[4] = ((theBoard[1] + theBoard[4] + theBoard[7]) === winString);
  test[5] = ((theBoard[2] + theBoard[5] + theBoard[8]) === winString);
  test[6] = ((theBoard[0] + theBoard[4] + theBoard[8]) === winString);
  test[7] = ((theBoard[2] + theBoard[4] + theBoard[6]) === winString);

  for (let i = 0; i < test.length; i++) {
    if ( test[i] === true) {
      return true;
    }
  }
}


// Displays the screen based on who wins the game
function displayScreen(outcome, outcomeScreen) {

  screenOnGame.setAttribute("class", outcomeScreen);
  screenGameButton.setAttribute("class", "button");
  screenGameh1.textContent = "Tic Tac Toe";
  screenGameButton.textContent = "New Game";
  screenP.textContent = outcome;
  screenOnGame.appendChild(screenGameHeader);
  screenGameHeader.appendChild(screenGameh1);
  screenGameHeader.appendChild(screenP);
  screenGameHeader.appendChild(screenGameButton);

  document.body.appendChild(screenOnGame);

// Removes the classes on the boxes
  screenGameButton.addEventListener("click", function() {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("box-filled-1");
      boxes[i].classList.remove("box-filled-2");
      boxes[i].classList.add("box");
    }

    player2.classList.remove("active");
    player1.classList.add("active");
    screenOnGame.remove();

  // Resets the movcount and the board
    moveCount = 0;
    theBoard = [];
  });

}

function initializeBoxes(box) {

  // // Mouseover turning O's grey
  // box.addEventListener("mouseover", function() {
  //   if (!box.classList.contains("box-filled-1-9") || !box.classList.contains("box-filled-2-9")) {
  //     box.classList.add("box-filled-1-5-1");
  //   }
  // });
  //
  // // mouseout removing gray class X's
  // box.addEventListener("mouseout", function() {
  //   if (!box.classList.contains("box-filled-1-9") || !box.classList.contains("box-filled-2-9")) {
  //     box.classList.remove("box-filled-1-5-1");
  //   }
  // });


  box.addEventListener("click", function() {

    let selectedBoxNum = Array.prototype.indexOf.call(boxes, this);
    theBoard[selectedBoxNum] = currentPlayer;
    console.log(theBoard);

    if (currentPlayer === "O") {
      box.classList.add("box-filled-1");
      currentPlayer = "X";
      player1.classList.remove("active");
      box.classList.remove("box-filled-1-5-1");
      player2.classList.add("active");
      moveCount += 1;
    } else if (currentPlayer === "X") {
      box.classList.add("box-filled-2");
      currentPlayer = "O";
      box.classList.remove("box-filled-1-5-1");
      player2.classList.remove("active");
      player1.classList.add("active");
      moveCount += 1;
    }

    let condition1 = (win(theBoard, xWins));
    let condition2 = (win(theBoard, oWins));
    let condition3 = (moveCount === 9);

    if (condition1) {
      console.log(lose);
      displayScreen(lose, loserScreen);
    } else if (condition2) {
      console.log(winner);
      displayScreen(winner, winnerScreen);
    } else {
      if ((!condition1) && (!condition2) && condition3) {
        console.log(draw);
        displayScreen(draw, drawScreen);
      }
    }
  });
}


gameStart();

for (let i = 0; i < boxes.length; i++) {
  initializeBoxes(boxes[i]);
}

}());
