function oddishOrEvenish(num) {
  var sum=0;
  while(num!=0){
    sum+=num%10;
    num=parseInt(num/10);
  };  
  if(sum%2==0){
      console.log("Even");
  }else{
      console.log("Odd");
  }
}
oddishOrEvenish(2345);