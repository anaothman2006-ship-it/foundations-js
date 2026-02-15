const btnStart = document.querySelector(".btn-start");
const btnClick = document.querySelector(".btn-clicker");
const scoreResult = document.querySelector(".score-result");
const recordResult = document.querySelector(".record-result")
recordResult.textContent = 0
scoreResult.textContent = 0
let sum = 0;

function myHandler() {
    sum += 1;
    scoreResult.textContent = sum;
}

function game() {
    btnStart.removeEventListener("click", game)
    sum = 0
    scoreResult.textContent = 0
    btnClick.addEventListener("click", myHandler)
    setTimeout(() => {
    btnClick.removeEventListener("click", myHandler); 
    if (sum > recordResult.textContent) 
    recordResult.textContent = scoreResult.textContent; 
    btnStart.addEventListener("click", game)
    }, 5000)
}


btnStart.addEventListener("click", game)
