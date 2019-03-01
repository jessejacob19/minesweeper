document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {};
board.cells = [];

function makeBoard(num){
  for (var i =0; i < num; i++)
    for (var j = 0; j < num; j++) {
      board.cells.push({row: i, col: j, isMine: isMineRandom(0.2), isMarked: false, hidden: true, surroundingMines: 0})
    }
}

function startGame () {
  makeBoard(4)
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  document.addEventListener("click", checkForWin)
  document.addEventListener("contextmenu", checkForWin)
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

function isMineRandom(percentage) {
  //20%
  var chance = Math.random()
  if (chance > percentage) {
    return false;
  } else {
    return true;
  }
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = getSurroundingCells(cell.row, cell.col);
  var surroundingCellsMine = [];
  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine === true) {
      surroundingCellsMine.push(surroundingCells[i]);
    }
  }
  return surroundingCellsMine.length;
}

