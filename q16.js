

function firstNotRepeated(str){
    for(let i=0; i<str.length; i++){
        const count=str.split(str[i]).length-1;
        if(count===1)return str[i];
    }
}
console.log(firstNotRepeated('abacddbec'));



