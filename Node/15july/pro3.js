function add(a, b) {
   var c = a + b;
   console.log("add : ", c)
}

function hello(a, b, op) {
   console.log("code better indore")
    op(a,b)
   console.log("infograins")
}

hello(30, 5,(a,b)=>console.log("Div :",( a/b)))