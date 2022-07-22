// function showNumbers(limit){
//     for(i=0;i<=limit;i++){
//         if(i%2 ===0){
//             console.log(i,"Even");
//         }
//         else{
//             console.log(i,"Odd");
//         }
//     }
//  }
// showNumbers(3);

 

function showNumbers (limit){
    for (i=0; i<=limit; i++){
        if (i%2==0){
            console.log(i,"even")
        }
        else{
            console.log(i,"odd")
        }
    }
}a=require("readline-sync")
showNumbers(limit=a.questionInt("enter the number :"))


