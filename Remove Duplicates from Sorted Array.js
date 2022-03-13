var numbers = [1,4,8,3,7,6,2,5]

for (var R=0;R<numbers.length-1;R++){
  for(var C=R+1;C<numbers.length;C++)  {
    if(numbers[R]>numbers[C]){
      var K = numbers[R]
      numbers[R]=numbers[C]
      numbers[C]= K
    }
  }
  
}
console.log( numbers)