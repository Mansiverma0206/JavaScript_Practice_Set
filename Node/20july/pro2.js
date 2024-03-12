var students = [
   {roll:101,name:"mansi",address:"mhow",age:23,marks:450},
   {roll:102,name:"monika",address:"indore",age:25,marks:432},
   {roll:103,name:"mohit",address:"dewas",age:27,marks:300},
   {roll:104,name:"manas",address:"bhopal",age:30,marks:350},
   {roll:105,name:"manveer",address:"ratlam",age:35,marks:300},
]

console.log(students)

var stud = students.filter(ob=>ob.age>25)
               .sort((ob1,ob2)=>ob2.marks-ob1.marks)
                .map(ob=>ob.name)
                  console.log(stud)


                  // high order function =>function as a argument resive 