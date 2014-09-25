var count = 8;

var board = "";

for (var i = 0; i <  count; i++) {
  for (var x = 0; x < count; x++ ) {
    if ((i + x) % 2 == 0)
      board+= "#";
    else
      board += " ";
  }
  board += "\n";
}

console.log(board);