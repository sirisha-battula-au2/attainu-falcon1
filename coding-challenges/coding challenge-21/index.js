//Javascript function that takes a number and convert it into words.

function convert(num){
    var n = num;
    var word = "";
    var numbers = [];
    words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    for(var i=0; i<n.length; i++){
      numbers.push(parseInt(num%10));
      num = parseInt(num/10);
      num = num.toString();
    }
    for(var i=numbers.length-1; i>=0; i--){
      var word = word+ " "+words[(numbers[i])];
      
    }
    console.log(word);
    
  }
  convert("1234");