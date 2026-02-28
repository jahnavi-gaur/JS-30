const cells = document.querySelectorAll('.cell')
const statusText = document.querySelector('#statusText')
const restartBtn = document.querySelector('#restartBtn')

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let turnO = true //playerX, playerO
let count = 0

cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        console.log('clicked')
        if(turnO){
            cell.innerText = 'O'
            turnO = false
        }
        else{
            cell.innerText = 'X'
            turnO = true
        }
        // cell.disabled = true
        cell.style.pointerEvents = "none";
        count++

        checkWinner()
    })
})

function checkWinner(){
    for(let pattern of winPatterns){
        // console.log(pattern)
        // console.log(pattern[0], pattern[1], pattern[2])

        let pos1Val = cells[pattern[0]].innerText
        let pos2Val = cells[pattern[1]].innerText
        let pos3Val = cells[pattern[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                statusText.textContent = pos1Val + " Wins"
                disabledCells()
            }
        }
    }
    drawCondition(count)
}

restartBtn.addEventListener('click',resetGame)

function disabledCells(){
    for(let cell of cells){
        // cell.disabled = true
        cell.style.pointerEvents = "none";
    }
}

function resetGame(){
    turnO = true 
    enableCells()
    statusText.textContent = ""
}

function enableCells(){
    for(let cell of cells){
        cell.style.pointerEvents = "auto";
        cell.innerText = ""
    }
}

function drawCondition(count){
    if(count === 9){
        statusText.textContent = 'Game Draw'
    }
}
