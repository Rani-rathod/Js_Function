


function outside(){
    var x=5;
    function inside(x){
      return x*2;
    }
    return inside;
}
  
console.log(outside(10))


// declaration  function / regular function
// Anonymos function
// Arrow function
// self-involking function


// #########################################################

// declaration function    ( The function declaration definesa function with the specifind parameter )


// function sum(a,b){
//     x=a+b
//     console.log(x)
// }
// sum(7,8)


// #######################################################


// Anonymos function   ( store in a variable )


// sum=function (a,b){
//     x=a+b
//     console.log(x)
// }
// sum(3,5)


// #######################################################

// Arrow function    ( No need to declare )


// let sum = (a, b) => {
//     let s = a + b;
//     return s;
// }
// let s1 = sum(5,7);
// console.log(s1); 


// #####################################################


//Self-invoking functions    ( No need to call )



// (function sum(a,b){
//     x=a+b
//     console.log(x)
// })(5,4)
