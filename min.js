

function minimum(){
    n=[3,4,5,6,7,12,89,1,2]
    var i=0
    var min=n[0]
    while(i<n.length){
        j=n[i]
        if (j<min){
            min=j
        }
        i++
    }
    console.log(min)
}
minimum()
