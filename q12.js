

function reverseNum(num){
    let revnum=0
    let n;
    while (num){
        n=num%10;
        num=Math.floor(num/10)
        revnum*=10
        revnum+=n
    }
    return revnum;
}
console.log(reverseNum(12345))




function reverse(num){
    let r=0;
    while (num){
    r=r*10;
    r=r+num%10;
    num=Math.floor(num/10);
    }
    return r;
}
console.log(reverse(5432109)); 


