function multiplication() {
    var n = document.getElementById("input").value;
    if (n !== "") {
      var result = "";
      var mul = "";
      for (i = 1; i <= 10; i++) {
        var mul = i * n;
        result += i + "x" + n + "=" + mul + "</br>";
        document.getElementById("result").innerHTML = result;
  
        // console.log(typeof b);
      }
    }
  }