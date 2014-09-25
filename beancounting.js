//function countBs(string) {
//  var count = 0;
//  for (i = 0; i < string.length; i++) {
//    if ( string.charAt(i) == "B" ) {
//      count +=1;
//    }
//  }
//  return count;
//}
function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, char) {
  var count = 0;
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) == char) {
      count += 1
    }
  }
  return count;
}

console.log(countBs("BBC"));
console.log(countBs("Buttermilk PanBcakeBs"));