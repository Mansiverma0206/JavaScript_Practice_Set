function add(a, b) {
   var c = a + b;
   console.log("add : ", c)
}
add(25, 5)

function multi(a, b) {
   var c = a * b;
   console.log("Multiply : ", c)
}
multi(25, 5)

function division(a, b) {
   var c = a / b;
   console.log("division : ", c)
}
division(25, 5)

function substraction(a, b) {
   var c = a - b;
   console.log("substraction : ", c)
}
substraction(25, 5)

function modulas(a, b) {
   var c = a % b;
   console.log("modulas : ", c)
}
modulas(25, 5)


function hello(a, b, op) {
   console.log("code better indore")
    op(a,b)
   console.log("infograins")
}

hello(30, 5,add)
