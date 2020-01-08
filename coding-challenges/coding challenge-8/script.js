document.getElementById("search").addEventListener('click', function(){
  var lan=document.getElementById("language").value;
  $.ajax({
  url:"https://raw.githubusercontent.com/attainu-falcon/attainu-falcon/master/coding-challenges/data/books.json",
  dataType: "JSON",
  success:function(books){
      var table = document.createElement('table');
      document.querySelector('#output').innerHTML="";
      document.querySelector('#output').appendChild(table);
      
           
      for(var i=0;i<=books.length;i++){
        var row = document.createElement('tr');
          table.appendChild(row);
          table.className='table table-dark table-striped table-bordered';
          
          if(i==0){
            var author =document.createElement('th');
            var country =document.createElement('th');
            var lang =document.createElement('th');
            var link =document.createElement('th');
            var title =document.createElement('th');
            var year = document.createElement('th');
            author.textContent="Author";
           
           country.textContent="Country";
           
           lang.textContent="Language";
           
           link.textContent="Link";
           
           title.textContent="Title";
           
           year.textContent="Year";

            
          }
        
        if(i>0&&lan.toLowerCase() == books[i].language.toLowerCase()){
          
          var author =document.createElement('td');
          var country =document.createElement('td');
          var lang =document.createElement('td');
          var link =document.createElement('td');
          var title =document.createElement('td');
          var year = document.createElement('td');
           
           author.textContent=books[i].author;
           
           country.textContent=books[i].country;
           
           lang.textContent=books[i].language;
           
           link.textContent=books[i].link;
           
           title.textContent=books[i].title;
           
           year.textContent=books[i].year;

           row.appendChild(author);
           row.appendChild(country);
           row.appendChild(lang);
           row.appendChild(link);
           row.appendChild(title);
           row.appendChild(year);
          
           console.log(books[i]);
        }
      }
    }
  })
})

