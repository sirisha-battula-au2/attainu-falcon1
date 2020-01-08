function compareArrays(p,q){
  var i, flag =true;
  if(p.length==q.length){
    for(i=0;i<p.length;i=i+1){
      if(p[i]!=q[i]){
        flag = false;
        break;
      }
    }
  }
  else{
    flag=false;
  }
  return flag;
}
var a=[5,6,2,8,1,3];
var b=[5,6,2,8,1,3];
console.log(compareArrays(a,b))