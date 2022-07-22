// function multiplesOfNumbers(limit){
//     var sum=0
//     for(i=0; i<=limit; i++){
//         if(i%3===0){
//             sum+=i;
//         }
//         if(i%5==0){
//             sum+=i;
//         }
//     }
//     console.log(sum);
// }
// multiplesOfNumbers(10);
 




// function multiplesOfNumbers(limit){
//     var i=0
//     var sum=0
//     while(i<=limit){
//         if (i%3===0){
//             sum+=i;
//         }
//         if (i%5===0){
//             sum+=i;
//         }
//         i++
//     }
//     console.log(sum)
// }
// multiplesOfNumbers(10)






function multiplesOfNumbers(limit){
    var sum=0;
    for (i=0; i<=limit; i++){
        if (i%3===0){
            sum+=i;
        }
        if (i%5===0){
            sum+=i;
        }
    }
    console.log(sum)
}n=require("readline-sync")
multiplesOfNumbers(limit=n.questionInt("Enter the number :-"))
