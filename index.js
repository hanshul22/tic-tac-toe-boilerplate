const boxElement = document.querySelectorAll(".box") 
var winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [3,4,6]
]
var xAttempts = [];
var oAttempts = [];
var click=0;
var wonTheGame = 0;
const message = document.getElementById("message");
const gameResult = document.getElementById("result")
const restart = document.getElementById("button");

boxElement.forEach(box=>{
    box.onclick  = handleClick;
})
function handleClick(e){
    console.log(e.target);
    console.log(e.target.getAttribute('id'));//getAttribute will get the id from the e.target
    const i=e.target.getAttribute('id');//store the id
    const text = document.createElement('p');//create element p for storing text
    text.setAttribute('id','text');//set the attribute id and value for text variable
    boxElement[i-1].appendChild(text);//append the newly created element text of boxElement
    console.log(boxElement[i-1]);
    if (click%2 == 0){
        xAttempts.push(parseInt(i-1));
        console.log(xAttempts);
        text.innerHTML="X";
        text.style.color = '#FAB201'; 
        Result(winningCombinations,xAttempts,"X");
    }
    else{
        oAttempts.push(parseInt(i-1));
        console.log(oAttempts);
        text.innerHTML="O";
        text.style.color = '#FAB201';
        Result(winningCombinations,oAttempts,"O");
    }
    click++;
    if(click == 9 && wonTheGame == 0){
        gameResult.style.visibility="visible";
        message.innerHTML = "It's a tie";
    }
}
function Result(winningCombinations, attempts, player){
    let flag = 0;
    let checker = [];
    for (var i = 0; i < winningCombinations.length; i++) {
        console.log(winningCombinations[i]);
        if (Array.isArray(winningCombinations[i])){

            Result(winningCombinations[i],attempts,player);
        }else{
            if(attempts.includes(winningCombinations[i])){
                checker.push(true);
                flag++;
            } else {
                checker.push(false);
            }
        }
    }
    if (checker.push(check => check === true) && flag>2){
        gameResult.style.visibility="visible";
        message.innerHTML = "'" + player + "'" + "Won the game!";
        wonTheGame=1;
    }
}

restart.onclick=()=>{
    history.go(0);
}