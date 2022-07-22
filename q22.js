// function factorial(n) {
//     if ((n===0) || (n===1)){
//       return 1;
//     }
//     else{
//       return (n*factorial(n-1));
//     }
// }
// console.log(factorial(5))

  



function factorial(n){
    if ((n===0) || (n===1)){
        return 1;
    }
    else {
        return(n*factorial(n-1))
    }
}
a=require("readline-sync");
n=a.questionInt("Enter the number :-")
console.log(factorial(n))

