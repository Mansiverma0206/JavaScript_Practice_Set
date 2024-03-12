var arr = [22,33,44,55,66,77,88]

// var num = arr.reduce((x,y)=>x+y,0);
// console.log(num)

var num = arr.reduce((x,y)=>y%2==0?x+y:x,0)
console.log(num)

// reduce can display only final result 

// 0+22=22                 22
// 33 = 33           33+22=55
// 44+33=77          55+44=99
// 55 =55            99+55=154
// 66+55=120         154+66=220
// 77  = 77
// 88 +77 = 165