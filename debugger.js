/*
const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];
console.log(board.join("\n"))
let board1 = board[5][0];
let board2 = board[7][0];

if (board1 > 0) {
    console.log("Error: Out Of bounds!")
}
board1 = board2;
board2 = " "
console.log(board.join("\n"));



const arr = [[" "], [""], ["p"], ["3"]];

if (!arr[0][0].trim()) {
    arr[0][0] = arr[2][0];
    arr[2][0] = " "
}
else {
    console.log("Error: Out Of bounds!");
}
console.log(arr)



const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(board.join("\n"));
let receivingBoard = board[7 - 3][0];
let givesBoard = board[7][0];

if (!receivingBoard.trim()) {
    receivingBoard = givesBoard;
    givesBoard = " ";
}
else {
    console.log("Error: Out Of bounds!");
}
console.log(board.join("\n"));


const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

if (!board[5 - 8][0].trim()){
    board[5 - 8][0] = board[7][0];
    board[7][0] = " "; 
} 

else {
    console.log("The place is occupied!");
}
console.log(board.join("\n"));

*/


// problem solved

const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(board.join("\n"));

let targetRow = 5

if (targetRow < 0 || targetRow > board.length) {
console.log("Error: Out Of bounds!")
} 
else {

if (!board[targetRow][0].trim()) {
    board[targetRow][0] = board[7][0];
    board[7][0] = " ";
}

else {
    console.log("The place is occupied!");
}

}
console.log(board.join("\n"));
