var students = [
   {roll:101,name:"mansi",address:"mhow",age:23},
   {roll:102,name:"monika",address:"indore",age:25},
   {roll:103,name:"mohit",address:"dewas",age:27},
   {roll:104,name:"manas",address:"bhopal",age:30},
   {roll:105,name:"manveer",address:"ratlam",age:35},
]

// decending order
// var stud = students.sort((ob1,ob2)=>ob2.age-ob1.age)

// accending order
var stud = students.sort((ob1,ob2)=>ob1.age-ob2.age)
// koi ek bhi condition shi hogi tb bhi some function wirk krta h
// var stud = students.some(ob=>ob.address=="mhow")


// sbhi objects pr condition apply hogi tb hi every function work krta 
// var stud=students.every(ob=>ob.age>=20)
console.log(stud)