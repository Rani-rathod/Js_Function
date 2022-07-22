
function upper(name){
    var i=0
    count=0
    count1=0
    for (i in (name)){
        if (i>="a" && i<="z"){
            count+=1
        }
        else if (i>="A" && i<="Z"){
            count1+=1
        }
    }
console.log("Upper case characters",count)
console.log("Upper case characters",count1)
}upper("The quick Brow Fox")


