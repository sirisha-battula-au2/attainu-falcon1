//Javascript function that takes a number and convert it into words.

function convert(number) {
var names = ["zero","one","two","three","four","five","six","seven","eight","nine"];
var word="";
while(number>0) {
  var digit = number %10;
  word = names[digit]+ " " + word;
  number = Math.floor(number/10);
}
return word;
}
console.log(convert(16565635));