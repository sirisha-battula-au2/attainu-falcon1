//program that generates an array of squares of only even numbers from the above array.

var numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];

//Imperative approach

var squareNumbers = [];
for(var i=0;i<numbers.length;i++)  {
  var square;
if(numbers[i]%2 === 0){
square = numbers[i] * numbers[i];
squareNumbers.push(square)
}
}
console.log(squareNumbers);


//Declarative approach

var numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];

var evenNumbers = numbers.filter((item) => {
  return item %2 === 0;

})

console.log(evenNumbers);

var squareNumbers = evenNumbers.map((item) => {
  return item*item;

})

console.log(squareNumbers);

 // chain method:
 function even(number) {
   return number%2===0;

 }
 function square(number) {
   return number*number ;

 }

 let squNumbers = numbers
    .filter(even)
    .map(square)
 console.log(squNumbers) ;  