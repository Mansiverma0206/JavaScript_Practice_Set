var numbers = [11,22,33,44,55,66,77,88,909,12,1,0,45,3,22,11,44,5]

var eNum = []

for(var num of numbers){
   if(num%2==0)
   {
      eNum.push(num)
   }
}
console.log(numbers)
console.log(eNum)