// Prints 1-100 numbers with multiples of 3 as Fizz and multiples of 5 as Buzz && multiples of 3 & % as FizzBuzz

const FizzBuzz = n => {

    for(let i=1; i<=n; i++) {
  
      if(i% 3 == 0 && i%5 == 0) {
        console.log('FizzBuzz');
        continue;
      }
  
      if(i % 3 == 0){
        console.log("Fizz");
        continue;
      }
  
      if(i % 5 == 0) {
        console.log("Buzz");
        continue;
      }
  
      console.log(i);
    }
  }
  
  FizzBuzz(100);