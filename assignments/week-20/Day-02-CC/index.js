//reverse digits of an integer.

function reverseDigits(int) {
    var result = 0;
    val = Math.abs(int);
  
    while(val > 0) {
      console.log(val);
      result = result * 10 + (val % 10);
      val = Math.floor(val /10);
      console.log(result);
      console.log(val);
      console.log("End of Iteration");
      
    }
  
    result = result * Math.sign(int);
  
    return result;
  }
  
  console.log(reverseDigits(12345));