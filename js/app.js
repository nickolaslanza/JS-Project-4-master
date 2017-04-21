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

  screenbutton.addEventListener("click", function(a,b) {
    this.remove();
    player1.classList.add("active");
    body.removeChild(screenOnLoad);
  });

}

let currentPlayer = "O";
let theXBoard = [];
let theOBoard = [];
let moveCount = 0;
const winningBoard = [
  "012", "021", "120", "102", "201", "210",
  "345", "354", "435", "453", "535", "534",
  "678", "687", "768", "786", "867", "876",
  "036", "063", "306", "360", "603", "630",
  "147", "174", "417", "471", "714", "741",
  "258", "285", "528", "582", "825", "852",
  "048", "084", "408", "480", "804", "840",
  "246", "264", "426", "462", "624", "642"
];
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
// theBoard is an array of values ["1" ]
function win(theBoard, winString) {
  let test1 = theBoard.join("");

  // Need to hash out this logic more
  if (theBoard.length > 3) {

    let theBoard1 = theBoard;
    theBoard1.shift();
    console.log("test2", theBoard1);
    for (let i = 0; i < winningBoard.length; i++) {
      if ( winningBoard[i] === theBoard1) {
        return true;
      }
    }

    let theBoard2 = theBoard;
    theBoard2.pop();
    console.log("test3", theBoard2);
    for (let i = 0; i < winningBoard.length; i++) {
      if ( winningBoard[i] === theBoard2) {
        return true;
      }
    }
  }


  for (let i = 0; i < winningBoard.length; i++) {
    if ( winningBoard[i] === test1) {
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

  screenGameButton.addEventListener("click", function() {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("box-filled-1");
      boxes[i].classList.remove("box-filled-2");
      boxes[i].classList.add("box");
    }

    player2.classList.remove("active");
    player1.classList.add("active");
    screenOnGame.remove();

    moveCount = 0;
    theXBoard = [];
    theOBoard = [];
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


  box.addEventListener("click", function(event) {

// Possible logic to solve the problems of not being able to click on a current box that's selected
    // if (currentPlayer === "O" && (!box.classList.contains("box-filled-1") || !box.classList.contains("box-filled-2")) {

    if (currentPlayer === "O") {
      box.classList.add("box-filled-1");
      currentPlayer = "X";
      player1.classList.remove("active");
      box.classList.remove("box-filled-1-5-1");
      player2.classList.add("active");
      moveCount += 1;
      theOBoard.push(event.target.id);
    } else if (currentPlayer === "X") {
      box.classList.add("box-filled-2");
      currentPlayer = "O";
      box.classList.remove("box-filled-1-5-1");
      player2.classList.remove("active");
      player1.classList.add("active");
      moveCount += 1;
      theXBoard.push(event.target.id);
    }

    console.log("theOBoard" ,theOBoard);
    console.log("theXBoard", theXBoard);
    let condition1 = (win(theXBoard, winningBoard));
    let condition2 = (win(theOBoard, winningBoard));
    let condition3 = (moveCount === 9);

    if (condition1) {
      displayScreen(lose, loserScreen);
    } else if (condition2) {
      displayScreen(winner, winnerScreen);
    } else {
      if ((!condition1) && (!condition2) && condition3) {
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
