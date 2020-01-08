//Product of integers

var multiply = function(num1, num2) {
    var result = 0;
    // if any of the nums is 0, automatically it is zero
    if (num1[0] === '0' || num2[0] === '0') {
      return '0'
    };
  
    var length1 = num1.length - 1;
    var length2 = num2.length - 1;
    var counterI = 0;
    var iBase10 = 1;
    for (var i = length1; i >= 0; i--) {
      iBase10 = Math.pow(10, counterI)
      counterI++;
      var counterJ = 0
      var jBase10 = 1;
      for (var j = length2; j >= 0; j--) {
        jBase10 = Math.pow(10, counterJ)
        counterJ++;
        result += (num1[i] * iBase10) * (num2[j] * jBase10)
      }
    }
    return result.toString()
  };
  
  var result = multiply("123", "456");
  
  console.log(result);