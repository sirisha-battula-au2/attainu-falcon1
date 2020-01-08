let anagramStrings = (str1, str2) => {
   
    if(str1.length !== str2.length){
      return false;
    }
    let input1 = {};
    let input2 = {};
    
    for(let i = 0; i < str1.length; i++){
        if(!input1[str1[i]]){
           input1[str1[i]] = 1;
        }else{
           input1[str1[i]]++;
        }
    }

     for(let i = 0; i < str2.length; i++){
        if(!input2[str2[i]]){
           input2[str2[i]] = 1;
        }else{
           input2[str2[i]]++;
        }
    }
     for(let i = 0; i < str1.length; i++){
       if(input1[str1[i]] !== input2[str2[i]]){
          return false;
       } 
    }

    return true;

}

console.log(anagramStrings('binary', 'brainy'));
console.log(anagramStrings('railsafety', 'fairytails'));
