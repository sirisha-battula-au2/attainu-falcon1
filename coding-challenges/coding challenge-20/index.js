//Pangram is a sentence containing every letter in the English alphabet.

function pangram(str) {
    var a = "abcdefghijklmnopqrstuvwxyz";
    str = str.toLowerCase();
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if(str.indexOf(a[i]) == -1) { result.push(a[i]); }
    }

   console.log(result);
}

pangram("The quick brown fox jumps");