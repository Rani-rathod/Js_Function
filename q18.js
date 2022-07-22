


// function tebal(a){
//     var i=1
//     while(i<=10){
//         console.log(a,"*",i,"=",a*i)
//         i++
//     }
// }p=require("readline-sync")
// tebal(a=p.questionInt("Enter the numebr :"))




function tebal(num){
    var i=1
    while(i<=num){
        j=1
        while(j<=10){
            console.log(i,"*","=",j*i)
            j++
        }
        console.log()
        i++
    }
}p=require("readline-sync");
tebal(num=p.questionInt("Enter the number :-"))
