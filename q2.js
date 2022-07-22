

function number(list1,list2){
    var i=0
    while (i<list1.length){
        if (list1[i]%2==0 && list2[i]%2==0){
            console.log(list1[i],list2[i],"both are even")
        }
        else{
            console.log(list1[i],list2[i],"both are not even")
        }
        i++
    }
}
number([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])

