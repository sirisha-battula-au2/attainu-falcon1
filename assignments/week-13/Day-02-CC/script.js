//Javascript function that checks if a number is power of two.//

function isPowerOf2 (input) {
    if (typeof input !== 'number')
        return false;
    
    while (input > 1 && input/2 !== 0 && input%2 === 0) {
         input /= 2; 
    }
    if (input === 1) 
    return true;
    else
    return false;
    }
    
    console.log(isPowerOf2(16));
    console.log(isPowerOf2(18));
    console.log(isPowerOf2(256));