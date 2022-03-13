var numbers = [10,20,30,40,50,60,70,80,90,100]

for (var index =3 ; index< numbers.length -1 ;index++){
 numbers[index]= numbers[index+1]
}
numbers.length -=1 ;

console.log(numbers);

