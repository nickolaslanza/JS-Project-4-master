// When the page loads, the startup screen should appear. Use the tictactoe-01-start.png mockup, and the start.txt HTML snippet to guide you.



(function IIFE(){

  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  const boxes = document.querySelector(".boxes").children;
  const screenPlayer1Input = document.createElement("input");
  const screenPlayer2Input = document.createElement("input");
  const player1name = document.querySelector(".name1");
  const player2name = document.querySelector(".name2");

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

    var player1value = screenPlayer1Input.value;
    var player2value = screenPlayer2Input.value;
    player1name.textContent = player1value;
    player2name.textContent = player2value;

    screenOnLoad.remove();

    player1.classList.add("active");
  });

}

function win(theBoard, winString) {
  let test = [];
  test[0] = ((theBoard[0] + theBoard[1] + theBoard[2]) === winString);
  for (let i = 0; i < test.length; i++) {
    if (test[i] === true) {
      return true;
    }
  }
}

function winScreen() {
  screenOnLoad.setAttribute("class", "screen screen-win-one");
  screenH1.textContent = "Winner";
  screenbutton.textContent = "New Game";
  screenOnLoad.appendChild(screenHeader);
  screenHeader.appendChild(screenH1);
  screenHeader.appendChild(screenbutton);
  document.body.appendChild(screenOnLoad);
}

let currentPlayer = "O";
let theBoard = [];
let playerShape = "";
let moveCount = 0;
const xWins = "XXX";
const oWins = "000";

function initializeBoxes(box) {

  // Mouseover not working when box clicked
  box.addEventListener("mouseover", function() {
    if (!box.classList.contains("box-filled-1")) {
      box.classList.add("box-filled-1-5-1");
    }
  });

  // mouseout not working when box clicked
  box.addEventListener("mouseout", function() {
    if (!box.classList.contains("box-filled-1")) {
      box.classList.remove("box-filled-1-5-1");
    }
  });

  box.addEventListener("click", function() {

    let selectedBoxNum = Array.prototype.indexOf.call(boxes, this);
    theBoard[selectedBoxNum] = currentPlayer;
    console.log(theBoard);

    if (currentPlayer === "O") {
      box.classList.add("box-filled-1");
      box.classList.add("clicked");
      currentPlayer = "X";
      player1.classList.remove("active");
      player2.classList.add("active");
      moveCount += 1;
    } else if (currentPlayer === "X") {
      box.classList.add("box-filled-2");
      box.classList.add("clicked");
      currentPlayer = "O";
      player2.classList.remove("active");
      player1.classList.add("active");
      moveCount += 1;
    }

    let condition1 = (win(theBoard, xWins));
    let condition2 = (win(theBoard, oWins));
    let condition3 = (moveCount === 9);

    if (condition1) {
      winScreen();
    } else if (condition2) {
      console.log("win!");
    } else {
      if ((!condition1) && (!condition2) && condition3) {
        console.log("Draw");
      }
    }


  });
}


gameStart();

for (let i = 0; i < boxes.length; i++) {
  initializeBoxes(boxes[i]);
}


}());
