// When the page loads, the startup screen should appear. Use the tictactoe-01-start.png mockup, and the start.txt HTML snippet to guide you.



(function IIFE(){

  const screenOnLoad = document.createElement("div");
  const screenHeader = document.createElement("header");
  const screenH1 = document.createElement("h1");
  const screenbutton = document.createElement("button");
  const screenPlayer1Label = document.createElement("label");
  const screenPlayer2Label = document.createElement("label");
  const screenPlayer1Input = document.createElement("input");
  const screenPlayer2Input = document.createElement("input");
  const br = document.createElement("br");

  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");

  // When the window loads, a screen displays over the game asking for the users inputs.
  window.onload = function() {
    // Creating the div for the screen and appending it
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

  }

// When the user clicks on start game, the values are then extracted from the inputs and placed on the screen underneath each x and o
  screenbutton.addEventListener("click", function() {
    // //If I uncomment this section, I get the error: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
    // //I'm not sure why. Can you help me?

    // var player1 = screenPlayer1Input.value;
    // var player2 = screenPlayer2Input.value;
    //
    // var player1div = document.getElementById("player1");
    // var player2div = document.getElementById("player2");
    //
    // player1div.appendChild(player1);
    // player2div.appendChild(player2);

    screenOnLoad.remove();

    player1.classList.add("active");
  });


const boxes = document.querySelector(".boxes").children;

function addingColor(box) {
  if (box.classList === "box") {
    return;
  } else {
    box.addEventListener("mouseover", function() {
      box.classList.add("box-filled-1-5");
    });
  }
}

function removingColor(box) {
    box.addEventListener("mouseout", function() {
      box.classList.remove("box-filled-1-5");
    });
}

function changingBackground(box) {
  box.addEventListener("click", function() {
    box.classList.remove("box-filled-1-5");
    box.classList.add("box-filled-1");
  });
}

// Giving all the boxes on the game board the ability to add color and remove the color
for (var i = 0; i < boxes.length; i++) {
  addingColor(boxes[i]);
  removingColor(boxes[i]);
  changingBackground(boxes[i]);
}






//Clicking on the box to add the svg
  // box1.addEventListener("click", function() {
  //   var svg =
  //   `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
  //     <g transform="translate(-200.000000, -60.000000)" fill="#FFFFFF">
  //       <g transform="translate(200.000000, 60.000000)">
  //         <path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g>
  //   </svg>`;
  //   var encoded = window.btoa(svg);
  //   box1.style.background = "url(data:image/svg+xml;base64," + encoded + ")";
  // });


}());
