function average(num1,num2,num3){
    console.log("sum of three numbers -",num1+num2+num3);
    console.log("Average of three numbers -",(num1+num2+num3)/3);
 }
const a= require('readline-sync');
let number1=a.questionInt('Enter the number1 :- ');
let number2=a.questionInt('Enter the number2 :- ');
let number3=a.questionInt('Enter the number3 :- ');
average(number1,number2,number3);
