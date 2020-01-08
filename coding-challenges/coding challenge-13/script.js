function isPalindrome(str){
    var string = str.toLowerCase().match(/[a-z]/gi).reverse();
    return string.join('') === string.reverse().join('');
}
if(isPalindrome("Malayalam")){
    console.log("Given string is Palindrome");
}else{
    console.log("Given string is not Palindrome");
}