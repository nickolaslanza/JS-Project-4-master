// When the page loads, the startup screen should appear. Use the tictactoe-01-start.png mockup, and the start.txt HTML snippet to guide you.

window.onload = function() {

// Creating the div for the screen
  let screenOnLoad = document.createElement("div");
  screenOnLoad.setAttribute("class", "screen screen-start");

// Creating a header for the screen with an h1 element3;
  let screenHeader = document.createElement("header");

  let screenH1 = document.createElement("h1");
  screenH1.textContent = "Tic Tac Toe";

// Adding button to the page.
  let screenbutton = document.createElement("button");
  screenbutton.setAttribute("class", "button");
  screenbutton.textContent = "Start Game";
  screenOnLoad.appendChild(screenHeader);
  screenHeader.appendChild(screenH1);
  screenHeader.appendChild(screenbutton);
  document.body.appendChild(screenOnLoad);

  
}
