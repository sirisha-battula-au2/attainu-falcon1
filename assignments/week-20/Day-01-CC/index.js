//Write a JavaScript function that finds all prime numbers upto a number n.(Sieve of Eratosthenes)

function findPrime(n) {
    var a = Array(n).fill(false);
  
    for(var i=2 ; i<Math.sqrt(n); i++) {
      for(var j = i*i; j <=n; j++) {
        if(j % i == 0) a[j]= true;   
       }
    }
  for(var i =2; i <=n; i++){
    if(!a[i])
    console.log(i);
     }
  }
  
  findPrime(100);
  
  
 

