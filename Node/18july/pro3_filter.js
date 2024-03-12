var numbers = [11,22,33,44,55,66,77,88,909,12,1,0,45,3,22,11,44,5]

var eNum = numbers.filter(num=>num%2==0);


// function checkEven(num){
//         return num%2==0
// }
// var numbers = [11,22,33,44,55,66,77,88,909,12,1,0,45,3,22,11,44,5]

// var eNum = numbers.filter(checkEven);

console.log(numbers)
console.log(eNum)


// pure function
var y = 10;
function excute(a,b){
        var x = a *  b + y;
        return x ;
}

var z = excute(5,10)