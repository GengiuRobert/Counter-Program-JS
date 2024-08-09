const countLabel = document.getElementById("countLabel");
const incBtn = document.getElementById("increaseButton");
const decBtn = document.getElementById("decreaseButton");
const resetBtn = document.getElementById("resetButton");

let cnt = 0 ;

incBtn.onclick = function(){
    cnt ++;
    countLabel.textContent = cnt;
}

decBtn.onclick = function(){
    cnt --;
    countLabel.textContent = cnt;
}

resetBtn.onclick = function(){
    cnt = 0;
    countLabel.textContent = cnt;
}