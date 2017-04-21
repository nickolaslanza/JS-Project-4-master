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

// const winningBoard = [
//   "012", "021", "120", "102", "201", "210",
//   "345", "354", "435", "453", "535", "534",
//   "678", "687", "768", "786", "867", "876",
//   "036", "063", "306", "360", "603", "630",
//   "147", "174", "417", "471", "714", "741",
//   "258", "285", "528", "582", "825", "852",
//   "048", "084", "408", "480", "804", "840",
//   "246", "264", "426", "462", "624", "642"
// ];

// const winningBoard = [
//   ['1a','1b','1c'],
//   ['2a','2b','2c'],
//   ['3a','3b','3c'],
//   ['1a','2a','3a'],
//   ['1b','2b','3b'],
//   ['1c','2c','3c'],
//   ['1a','2b','3c'],
//   ['3a','2b','1c']
// ];
// const wincondition1 = ['1a','1b','1c'];
// const wincondition2 = ['2a','2b','2c'];
// const wincondition3 = ['3a','3b','3c'];
// const wincondition4 = ['1a','2a','3a'];
// const wincondition5 = ['1b','2b','3b'];
// const wincondition6 = ['1c','2c','3c'];
// const wincondition7 = ['1a','2b','3c'];
// const wincondition8 = ['3a','2b','1c'];

let allboxes = document.querySelectorAll(".box");
console.log(allboxes);
let box1 = document.getElementById("1a");
let box2 = document.getElementById("1b");
let box3 = document.getElementById("1c");
let box4 = document.getElementById("2a");
let box5 = document.getElementById("2b");
let box6 = document.getElementById("2c");
let box7 = document.getElementById("3a");
let box8 = document.getElementById("3b");
let box9 = document.getElementById("3c");

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

let currentPlayer = "O";
let moveCount = 0;

// Core logic of how to win on the gameboard;
function win() {

  if (box1.textContent !== "") {
    // top across
    if (box1.textContent === box2.textContent) {
      if (box1.textContent === box3.textContent) {
        return true;
      }
    }
    // top down
    if (box1.textContent === box4.textContent) {
      if (box1.textContent === box7.textContent) {
        return true;
      }
    }
    //top diagnal right down
    if (box1.textContent === box5.textContent) {
      if (box1.textContent === box9.textContent) {
        return true;
      }
    }
  }

  if (box7.textContent != "") {
    // bottom left, across
    if (box7.textContent === box8.textContent) {
      if (box7.textContent === box9.textContent) {
        return true;
      }
    }
    // bottom left, topright diagnal
    if (box7.textContent === box5.textContent) {
      if (box7.textContent === box3.textContent) {
        return true;
      }
    }
  }

  if (box6.textContent != "") {
    if (box6.textContent === box9.textContent) {
      if (box6.textContent === box3.textContent) {
        return true;
      }
    }
    if (box6.textContent === box5.textContent) {
      if (box6.textContent === box4.textContent) {
        return true;
      }
    }
  }

  if (box5.textContent != "") {
    // bottom left, across
    if (box5.textContent === box2.textContent) {
      if (box5.textContent === box8.textContent) {
        return true;
      }
    }
  }

  return false;
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
      boxes[i].textContent = "";
    }

    player2.classList.remove("active");
    player1.classList.add("active");
    screenOnGame.remove();

    moveCount = 0;
  });

}

function initializeBoxes(box) {

  box.addEventListener("click", function(event) {
    if (currentPlayer === "O") {
      box.classList.add("box-filled-1");
      box.textContent = "o";
      player1.classList.remove("active");
      box.classList.remove("box-filled-1-5-1");
      player2.classList.add("active");
      moveCount += 1;
    } else if (currentPlayer === "X") {
      box.classList.add("box-filled-2");
      box.textContent = "x";
      box.classList.remove("box-filled-1-5-1");
      player2.classList.remove("active");
      player1.classList.add("active");
      moveCount += 1;
    }

    let condition1 = (win());
    let condition3 = (moveCount === 9);

    if (condition1) {
      displayScreen(lose, loserScreen);
    } else {
      if ((!condition1) && condition3) {
        displayScreen(draw, drawScreen);
      }
    }

    // Changing Players after we check for win conditions
    if (currentPlayer === "O") {
      currentPlayer = "X";
    } else if (currentPlayer === "X") {
      currentPlayer = "O";
    }
  });
}


gameStart();

for (let i = 0; i < boxes.length; i++) {
  initializeBoxes(boxes[i]);
}

}());





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
