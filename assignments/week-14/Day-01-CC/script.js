//sum of the series:

function SumOfSeries(n) { 
    var sum = 0; 
    for (var i = 1 ; i <= n ; i++) {
        for (var j = 1 ; j <= i ; j++) {
            sum += j; 
}
    
} 
return sum;   


} 

console.log( SumOfSeries(5));