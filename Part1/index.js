// console.log('Hello World!'); Tested to make sure link was properly initiated to the HTML file

var board = []
console.log(board);

function play(clickedId){
    var playerSpan = document.getElementById('player');
    var clickedElement = document.getElementById(clickedId);
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    }
    else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }



//naming the squares as variables
var topLeft = board [0];
var topMiddle = board[1];
var topRight = board[2];
var middleLeft = board[3];
var middleMiddle = board[4];
var middleRight = board[5];
var bottomLeft = board[6];
var bottomMiddle = board[7];
var bottomRight = board[8];


//checking if someone has won

//straight top row
if (topRight !== undefined && topRight === topMiddle && topRight === topLeft){
    window.alert('Winner!');
}
//straight middle row
if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight){
    window.alert('Winner!');
}
//straight bottom row
if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
    window.alert('Winner!');
}
//straight right column
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    window.alert('Winner!');
}
//straight middle column
if (topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle){
    window.alert('Winner!');
}
//straight left column
if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    window.alert('Winner!');
}
//diagonal from the left to the right
if(topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight){
    window.alert('Winner!');
}
//diagonal from the right to the left
if (topRight !== undefined && topRight === middleMiddle && topRight === bottomLeft){
    window.alert('Winner!');
}


//Check if board is full
let boardFull = true;
for (let i = 0; i <= 8; i++) {
  if (board[i] === undefined) {
    boardFull = false;
  }
}
if (boardFull === true) {
  window.alert("Cats game, please refresh to start a new game");
}
}

