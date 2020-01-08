//between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumOfSquares = n => {
    let sum = 0;

    for(let i = 1 ; i <=n ; i++){

        sum += (i*i)

    }

    return sum;


}

const squareOfSum = n => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i
    }
return sum * sum;

}

const main  = n => {
    return (squareOfSum(n)- sumOfSquares(n));
}

console.log(main(100));