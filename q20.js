


function my_function(num){
    var i=0
    while (i<=num){
        if(i%2==0){
            console.log("even",i)
        }
        else{
            console.log("odd",i)
        }
        i++
    }
}a=require("readline-sync");
my_function(num=a.questionInt("Enter the number :-"))   
