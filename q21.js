


function sumofdigits(number){
    var sum=0
    var modulus=0
    while (number!=0){
        modulus=number%10
        sum+=modulus
        number/=10
        return sum
    }
    // return sum
}
console.log(sumofdigits(1234))
