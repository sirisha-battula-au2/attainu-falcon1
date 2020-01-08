//Pyramid star pattern

function pyramidStar(rows)
{
for(var i=0;i<rows;i++) {
var result="";
    for(var j=0;j<rows-i;j++) {
        result+=" ";
    }
    for(var k=0;k<=i;k++) {    
       result += "* ";
    }
    console.log(result);  
}  
}
pyramidStar('10')