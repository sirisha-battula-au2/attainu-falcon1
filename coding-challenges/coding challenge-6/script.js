function searchStrings(input){
    $.ajax({
        url : 'https://raw.githubusercontent.com/attainu-falcon/attainu-falcon/master/coding-challenges/cities.json',
     dataType:'json',   
        success:function(array){
  for( var i=0;i<array.length;i++){
       if(input ==array[i].name[0]){
          console.log(array[i].name);
       }
  }
        },
        statusCode:{
           404: function() {
          alert("page not found")
        }
  
        }
    })
  }
  // var input ="B"
  searchStrings("B");