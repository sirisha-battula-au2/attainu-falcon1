var username = "siri_123";
var password = "password";

document.querySelector("#login").addEventListener("click",function() {

    validate(username,password);

});

function validate(username, password){
    var user=document.querySelector("#user").value;
    var pass=document.querySelector("#pass").value;

    if(user.length<6) {
        alert("Username must contain 6 or more characters");
        return false;
    }
    else if(pass.length<8){
        alert("password must contain 8 or more characters");
        return false; 
    }
    else if(!isAllowed(user))  {
        alert("username contains invalid characters");
        return false;
    }
    else if(!isNaN(user[0])) {
         alert("username cannot start with digit");
         return false;

    }
    else if(user.toLowerCase()!=username.toLowerCase() || pass !=password) {
        alert("username and password do not match");
        return false;
    }
    else {
        alert("logged in successfully");
        return true;

    }
    
}

function isAllowed(string) {
    var i,code;

    for(i=0; i<string.length;i++) {
        code = string.charCodeAt(i);
        if(!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code >96 && code <123) &&
        !(code == 95)) {
         return false;
        }   
    }
    return true;
         
    }

