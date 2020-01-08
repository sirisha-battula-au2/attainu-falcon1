// Largest and Smallest number in the array

numbers = [2, 4, 19, 2, 8, 16, 24, 48]
var largest = numbers[0];
var smallest = numbers[0];
for (var i = 0; i < numbers.length; i++){
    var temp = numbers[i];
    if (temp > largest)
    {
        largest = numbers[i];
    }
    if (temp < smallest)
    {
        smallest = numbers[i];
    }
}
console.log(largest);
console.log(smallest);