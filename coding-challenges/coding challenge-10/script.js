var str1 = "abcdefgh";
var str2 = "bacdfehg";
var hamming=0;
 for(var i=0; i<=str1.length; i++){
   if (str1.charAt(i)!==str2.charAt(i)){
     hamming=hamming+1;
   }
 

 }
 console.log("Hamming distance is = "+hamming)

 