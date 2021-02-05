window.addEventListener("DOMContentLoaded", (event) => {
  const click = document.getElementById("tic-tac-toe-board");
  console.log(click);
  const squares = document.querySelectorAll(".square");
  console.log(squares);

  let currentPlayerSymbol = "x";
  let squareValues = ["", "", "", "", "", "", "", "", ""];

  click.addEventListener("click", (event) => {
    const xDiv = document.createElement("img");
    xDiv.src =
      "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
    const oDiv = document.createElement("img");
    oDiv.src =
      "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";
    let temp = event.target.id[event.target.id.length - 1];

    if (
      event.target.id.includes("square-") &&
      squareValues[temp] === "" &&
      currentPlayerSymbol === "x"
    ) {
      squareValues[temp] = currentPlayerSymbol;
      currentPlayerSymbol = "o";
      event.target.appendChild(xDiv);
    } else if (
      event.target.id.includes("square-") &&
      squareValues[temp] === "" &&
      currentPlayerSymbol === "o"
    ) {
      squareValues[temp] = currentPlayerSymbol;
      currentPlayerSymbol = "x";
      event.target.appendChild(oDiv);
    }




    console.log(squares[temp]);
    console.log(squareValues);
  });

  if (squareValues[0] !== "" && 
  squareValues[0] === squareValues[1] && 
  squareValues[0] === squareValues[2]) {
      
   alert('Winner = X')

  }

});
