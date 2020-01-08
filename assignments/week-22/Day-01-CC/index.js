//The count-and-say sequence is the sequence of integers with the first five terms

function countAndSay(n) {
     if (n <= 0)
         return null;
  
     var result = "1";
     var i = 1;
  
     while (i < n) {
         var sb = '';
         var count = 1;
         for (var j = 1; j < result.length; j++) {
             if (result.charAt(j) == result.charAt(j - 1)) {
                 count++;
             } else {
                 sb += count;
                 sb += result.charAt(j - 1);
                 count = 1;
             }
         }
  
         sb += count;
         sb += result.charAt(result.length - 1);
         result = sb;
         i++;
     }
  
     return result;
 }
 
 console.log(countAndSay(11));