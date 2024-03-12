// map can modify the data . but nothing changes in original array .

var arr = [ 22,33,44,55,66,77,8899,0,11,22,543]
console.log(arr)
var arr2 =  arr.map(num=>num%2!=0?num+10:num)
console.log(arr2)