// When the page loads, the startup screen should appear. Use the tictactoe-01-start.png mockup, and the start.txt HTML snippet to guide you.

(function IIFE(){

  //variables to create the home beginning screen;
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  const boxes = document.querySelector(".boxes").children;
  const screenPlayer1Input = document.createElement("input");
  const screenPlayer2Input = document.createElement("input");
  const player1name = document.querySelector(".name1");
  const player2name = document.querySelector(".name2");
  const body = document.querySelector("body");
  let screenOnLoad = document.createElement("div");
  let screenHeader = document.createElement("header");
  let screenH1 = document.createElement("h1");
  let screenbutton = document.createElement("button");
  let screenPlayer1Label = document.createElement("label");
  let screenPlayer2Label = document.createElement("label");
  let br = document.createElement("br");

// Variables for Boxes
  let box1 = document.getElementById("1a");
  let box2 = document.getElementById("1b");
  let box3 = document.getElementById("1c");
  let box4 = document.getElementById("2a");
  let box5 = document.getElementById("2b");
  let box6 = document.getElementById("2c");
  let box7 = document.getElementById("3a");
  let box8 = document.getElementById("3b");
  let box9 = document.getElementById("3c");

// Variables to create a screen
  let screenOnGame = document.createElement("div");
  let screenGameHeader = document.createElement("header");
  let screenGameh1 = document.createElement("h1");
  let screenGameButton = document.createElement("button");
  let screenP = document.createElement("p");
  const winner = "O Wins!";
  const lose = "X Wins!";
  const draw = "Draw";
  const winnerScreen = "screen screen-win-one";
  const loserScreen = "screen screen-win-two";
  const drawScreen = "screen screen-win-tie";

// Variables for the game
  let currentPlayer = "O";
  let moveCount = 0;

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
    player1.innerHTML = screenPlayer1Input.value;
    player2.innerHTML = screenPlayer2Input.value;
    player1.style.color = "white";
    player2.style.color = "white";
  });

}

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
function displayScreen() {

  // Draw
 if (currentPlayer === "X" && moveCount !== 9) {
    screenOnGame.setAttribute("class", loserScreen);
    screenOnGame.setAttribute("id", "finish");
    screenGameButton.setAttribute("class", "button");
    screenGameh1.textContent = "Tic Tac Toe";
    screenGameButton.textContent = "New Game";
    screenP.textContent = lose;
    screenOnGame.appendChild(screenGameHeader);
    screenGameHeader.appendChild(screenGameh1);
    screenGameHeader.appendChild(screenP);
    screenGameHeader.appendChild(screenGameButton);
    document.body.appendChild(screenOnGame);
    // If you win screen
  } else if (currentPlayer === "O" && moveCount !== 9) {
    screenOnGame.setAttribute("class", winnerScreen);
    screenOnGame.setAttribute("id", "finish");
    screenGameButton.setAttribute("class", "button");
    screenGameh1.textContent = "Tic Tac Toe";
    screenGameButton.textContent = "New Game";
    screenP.textContent = winner;
    screenOnGame.appendChild(screenGameHeader);
    screenGameHeader.appendChild(screenGameh1);
    screenGameHeader.appendChild(screenP);
    screenGameHeader.appendChild(screenGameButton);
    document.body.appendChild(screenOnGame);
  } else if (moveCount === 9) {
      screenOnGame.setAttribute("class", drawScreen);
      screenOnGame.setAttribute("id", "finish");
      screenGameButton.setAttribute("class", "button");
      screenGameh1.textContent = "Tic Tac Toe";
      screenGameButton.textContent = "New Game";
      screenP.textContent = draw;
      screenOnGame.appendChild(screenGameHeader);
      screenGameHeader.appendChild(screenGameh1);
      screenGameHeader.appendChild(screenP);
      screenGameHeader.appendChild(screenGameButton);
      document.body.appendChild(screenOnGame);
      // If you lose screen
    }

  screenGameButton.addEventListener("click", function() {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("box-filled-1-5");
      boxes[i].classList.remove("box-filled-1");
      boxes[i].classList.remove("box-filled-2-5");
      boxes[i].classList.remove("box-filled-2");
      boxes[i].classList.add("box");
      boxes[i].textContent = "";
    }
    player2.classList.remove("active");
    player1.classList.add("active");
    screenOnGame.remove();
    moveCount = 0;
    currentPlayer = "O";
  });

}

function initializeBoxes(box) {

  box.addEventListener("mouseover", function(event) {
    if (box.classList.contains("box-filled-1-5") || box.classList.contains("box-filled-2-5")) {
      event.preventDefault();
    } else {
      if (currentPlayer === "O") {
        box.classList.add("box-filled-1");
      } else if (currentPlayer === "X") {
        box.classList.add("box-filled-2");
      }
    }
  });

  box.addEventListener("mouseout", function(event) {
    if (currentPlayer === "O" && box.classList.contains("box-filled-1")) {
      box.classList.remove("box-filled-1");
    } else if (currentPlayer === "X" && box.classList.contains("box-filled-2")) {
      box.classList.remove("box-filled-2");
    }
  });

  box.addEventListener("click", function(event) {
    if (box.classList.contains("box-filled-1-5") || box.classList.contains("box-filled-2-5")) {
      event.preventDefault();
    } else {
      if (currentPlayer === "O") {
        box.classList.add("box-filled-1-5");
        box.innerHTML = "o";
        box.style.color = "orange";
        player1.classList.remove("active");
        player2.classList.add("active");
        moveCount += 1;
      } else if (currentPlayer === "X") {
        box.classList.add("box-filled-2-5");
        box.innerHTML = "x";
        box.style.color = "white";
        player2.classList.remove("active");
        player1.classList.add("active");
        moveCount += 1;
      }

      let condition1 = (win());

      if (condition1) {
        displayScreen();
      } else if (moveCount === 9) {
        displayScreen();
      }

      // Changing Players after we check for win conditions
      if (currentPlayer === "O") {
        currentPlayer = "X";
      } else if (currentPlayer === "X") {
        currentPlayer = "O";
      }
    }


  });
}

gameStart();

for (let i = 0; i < boxes.length; i++) {
  initializeBoxes(boxes[i]);
}

}());


// Trying to figure out event listener functionality

// function addEventListenerByClass(className, event, fn) {
//     var list = document.getElementsByClassName(className);
//     for (var i = 0; i < list.length; i++) {
//         list[i].addEventListener(event, fn, false);
//     }
// }
//
// function listen() {
//   if (!list[i].classList.contains("box-filled-1-9") || !box.classList.contains("box-filled-2-9")) {
//     box.classList.add("box-filled-1-5-1");
//   }
// }
//
// addEventListenerByClass('box', 'mouseover', listen);
//
//
// // daboxes.addEventListener("mouseover", function() {
// //   if (!box.classList.contains("box-filled-1-9") || !box.classList.contains("box-filled-2-9")) {
// //     box.classList.add("box-filled-1-5-1");
// //   }
// // });
// //
// // daboxes.addEventListener("mouseout", function() {
// //   if (!box.classList.contains("box-filled-1-9") || !box.classList.contains("box-filled-2-9")) {
// //     box.classList.remove("box-filled-1-5-1");
// //   }
// // });
