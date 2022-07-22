
function great(arr){
    arr2 = [];
    arr.sort(function(a,b){
    return a-b;
    })
    arr2.push(arr[1], arr[arr.length - 2]);
    return arr2;
}
console.log(great([1,2,3,4,5]));


