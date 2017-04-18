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

  let box1 = document.getElementById("box1");

  box1.addEventListener("mouseover", () => {
    box1.style.backgroundImage = "url(../img/x.svg)";
  });

  var game = {

  }


}());
