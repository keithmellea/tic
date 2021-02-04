window.addEventListener('DOMContentLoaded', event => {


    // console.log(xDiv);
    const click = document.getElementById("tic-tac-toe-board");
    console.log(click)
    const squares = document.querySelectorAll(".square");
    console.log(squares)
    click.addEventListener("click", event => {

        const xDiv = document.createElement('img');
        xDiv.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
        const oDiv = document.createElement('img');
        oDiv.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
        let turnCount = 0;
        for (let i = 0; i < squares.length; i++){
            let square = squares[i];

            if(event.target === square && turnCount%2 !== 0){
                square.appendChild(xDiv)
            } else if(event.target === square && turnCount%2 === 0){
                square.appendChild(oDiv)
            }
            turnCount++;

        }

    })


})
