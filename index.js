// add solution here
var arr = [];

function theBeatlesPlay(musicians, instruments) {
  for(var i = 0; i < musicians.length; i++)
  {
    arr[i] = `${musicians[i]} plays ${instruments[i]}`
  }

  return arr;
}
function johnLennonFacts(arr) {
  var i = (arr.length-1);
  var arr1 = [];

  while(i >= 0) {
    arr1[i] = `${arr[i]}!!!`
  }

  return arr1;
}
