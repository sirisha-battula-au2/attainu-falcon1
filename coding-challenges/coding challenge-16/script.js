function extractQuery(url) {
  var i, keys=[], values=[];
  var startIndex;
  for(i=0; i<url.length; i++) {
    if(url.charAt(i)== '?') {
      startIndex = i;

    }
    else if(url.charAt(i) == '=') {
      keys.push(url.substring(startIndex+1, i));
      startIndex = i;

    }
    else if(url.charAt(i) == '&') {
    values.push(url.substring(startIndex+1, i));
      startIndex = i;
    }

      else if(i == url.length-1) {
      values.push(url.substring(startIndex+1, i+1));
     
      }
}

for(i=0;i<keys.length; i++) {
  console.log(keys[i] + ":" +values[i]);
}
}
extractQuery("http://localhost:3000/add?num1=5&num2=4&num3=10");

