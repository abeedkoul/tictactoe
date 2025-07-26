const cell = document.querySelectorAll(".cells");

let gameboard = ["", "", "", "", "", "", "", "", ""];
const resetButton = document.querySelector(".reset-board");
const resetCounterButton = document.querySelector(".reset-counter");
const displayScoreX = document.querySelector("#counterX")
const displayScoreO = document.querySelector("#counterO")
let counterX = 0;
let counterO = 0;
let player = "X";
for (let i = 0; i < cell.length; i++) {


    cell[i].addEventListener("click", () => {
        if (cell[i].innerHTML === "") {
            if (player == "X") {
                cell[i].innerHTML = "X";
                gameboard[i] = "X";
                
                if (!checkDraw() && checkWin(player)) {
                    setTimeout(()=>{alert(`Player X won`)},500);
                    setTimeout(resetBoard,1000)
                    counterX++;
                    displayScoreX.innerHTML=`X: ${counterX}`
                    
                }
                else if(checkDraw()){
                    setTimeout(()=>{alert(`Game is Draw`)},500);
                    setTimeout(resetBoard,1000)
                }
                player = "O";

            }

            else if (player == "O") {
                cell[i].innerHTML = "O";
                gameboard[i] = "O";
                
                if (!checkDraw() && checkWin(player)) {
                    setTimeout(()=>{alert(`Player O won`)},500);
                    setTimeout(resetBoard,1000)
                    counterO++;
                    displayScoreO.innerHTML=`O: ${counterO}`
                }
                else if(checkDraw()){
                    setTimeout(()=>{alert(`Game is Draw`)},500);
                    setTimeout(resetBoard,1000)
                    
                }
                player = "X";
            }
        }
        else {
            alert(`Player ${player}, Choose an Empty Square`);
        }

    })
}

const winCombos = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8], 
    [2,4,6]  
  ];

function checkWin(player) {
    return winCombos.some(combo =>
        combo.every(index => gameboard[index] === player)
    );
}
function checkDraw() {
    return gameboard.every(cell => cell !== "");
}

function resetBoard(){
    for(let i =0;i<cell.length;i++){
        cell[i].innerHTML = "";
    }
    gameboard = ["", "", "", "", "", "", "", "", ""];
    player = "X";
}
resetButton.addEventListener("click", () => {
    resetBoard();
})

function resetCounter(){
    counterO=0;
    displayScoreO.innerHTML=`O: ${counterO}`
    counterX=0;
    displayScoreX.innerHTML=`X: ${counterX}`
    
}
resetCounterButton.addEventListener("click",()=>{
    resetCounter();
    console.log("lol")
})