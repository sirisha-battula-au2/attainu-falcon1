function createTable() {
    var body = document.body;
    var table1 = document.createElement("table");
    table1.style.width = "50%";
    table1.setAttribute("border", "1");
    var tbody1 = document.createElement("tbody");
  
for (var i = 1; i < 11; i++) {
  var number = i;
    var squares = number * number;
    console.log(squares);
  
    var row = table1.insertRow();
    row.style.backgroundColor="yellow";


    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
   cell1.appendChild(document.createTextNode(number));
    cell1.style.border = "1px solid black";
    
   cell2.appendChild(document.createTextNode(squares));
    cell2.style.border = "1px solid black";
     }
  }
  body.appendChild(table1);
}

createTable();


 