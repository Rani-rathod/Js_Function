


// function greater(number){
//     i=0
//     max=0
//     while (i<number.length){
//         if (number[i]>max){
//             max=number[i]
//         }
//         i++
//     }
//     console.log("greter",max)
// }
// greater(number=[3,4,5,6,7])





function maximum(){
    n=[3,4,5,6,12,89,7]
    var i=0
    max=0
    while (i<n.length){
        j=n[i]
        if (j>max){
            max=j
        }
        i++
    }
    console.log(max)
}
maximum()
