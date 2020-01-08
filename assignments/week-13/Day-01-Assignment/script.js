// program on classes and constructors

class MyArray{
    constructor(array){
      this.array=array;
    }
    print(){
      return this.array;
    }
  
    search(searchValue){
      for(var i=0;i<this.array.length;i++){
        if(searchValue==this.array[i])
        return i;
      }
      return -1;
    }
  
    sort(){
      
       return this.array.sort(function(a,b){return b-a});
      
  }
  }
  var arr1 = [5,3,4,1,6,8,7,2];
  array1=new MyArray(arr1);
  console.log("print method:");
  console.log(array1.print());
  
  console.log("search method:");
  console.log(array1.search(4));
  
  console.log("sort method:");
  console.log(array1.sort());
      
  