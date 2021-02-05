window.addEventListener("DOMContentLoaded", (event) => {
    const click = document.getElementById("tic-tac-toe-board");
    console.log(click);
    const squares = document.querySelectorAll(".square");
    console.log(squares);



    let currentPlayerSymbol = "x";
    let squareValues = ["", "", "", "", "", "", "", "", ""];
    let board = document.getElementById("game-status");
    let gameStatus;
    let newGame = document.getElementById("new-game")
    // console.log(newGame)
    let Giveup = document.getElementById("give-up");

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



        if (squareValues[0] !== "" &&
            squareValues[0] === squareValues[1] &&
            squareValues[0] === squareValues[2]) {

            board.innerHTML = `Winner = ${squareValues[0]}`;
            gameStatus = 1;


        } else if (squareValues[3] !== "" &&
            squareValues[3] === squareValues[4] &&
            squareValues[3] === squareValues[5]) {

            board.innerHTML = `Winner = ${squareValues[3]}`;
            gameStatus = 1;


        } else if (squareValues[6] !== "" &&
            squareValues[6] === squareValues[7] &&
            squareValues[6] === squareValues[8]) {

            board.innerHTML = `Winner = ${squareValues[6]}`;
            gameStatus = 1;


        } else if (squareValues[0] !== "" &&
            squareValues[0] === squareValues[3] &&
            squareValues[0] === squareValues[6]) {

            board.innerHTML = `Winner = ${squareValues[0]}`;
            gameStatus = 1;


        } else if (squareValues[1] !== "" &&
            squareValues[1] === squareValues[4] &&
            squareValues[1] === squareValues[7]) {

            board.innerHTML = `Winner = ${squareValues[1]}`;
            gameStatus = 1;


        } else if (squareValues[2] !== "" &&
            squareValues[2] === squareValues[5] &&
            squareValues[2] === squareValues[8]) {

            board.innerHTML = `Winner = ${squareValues[2]}`;
            gameStatus = 1;


        } else if (squareValues[0] !== "" &&
            squareValues[0] === squareValues[4] &&
            squareValues[0] === squareValues[8]) {

            board.innerHTML = `Winner = ${squareValues[0]}`;
            gameStatus = 1;


        } else if (squareValues[2] !== "" &&
            squareValues[2] === squareValues[4] &&
            squareValues[2] === squareValues[6]) {

            board.innerHTML = `Winner = ${squareValues[2]}`;
            gameStatus = 1;


        }

        if (gameStatus === 1) {
            newGame.addEventListener("click", event => {
                location.reload();
            })

        }

        Giveup.addEventListener("click", event => {
            if (currentPlayerSymbol === 'x') {
                board.innerHTML = `Winner = o`;
                gameStatus === 1;
            } else {
                board.innerHTML = `Winner = x`;
                gameStatus === 1;
            }
            newGame.addEventListener("click", event => {
                location.reload();
            })

        })


    });


});
