var students = [];

var roll_Box = undefined;
var name_Box = undefined;
var branch_Box = undefined;
var phy_Box = undefined;
var che_Box = undefined;
var math_Box = undefined;
var tbody = undefined;


function saveStud() {
   // object to string
   // var str = JSON.stringify(students)
   // console.log(str)

   // json to object 
   // var object = JSON.parse(str)
   // console.log(object)

   if (students.length > 0) {
      var str = JSON.stringify(students);
      localStorage.setItem("stud_data", str)
   } else {
      alert("No data to be set")
   }
}
function init() {
   roll_Box = document.getElementById('rollBox');
   name_Box = document.getElementById('nameBox');
   branch_Box = document.getElementById('branchBox');
   phy_Box = document.getElementById('phyBox');
   che_Box = document.getElementById('cheBox');
   math_Box = document.getElementById('mathBox');
   tbody = document.getElementById('tbody');


   var data = localStorage.getItem("stud_data")
   if (data != null) {
      var arr = JSON.parse(data)
      for (var ob of arr) {
         students.push(ob)
         setObjectIntoTable(ob)
      }
   }
}

function addStud() {
   var rollno = roll_Box.value;
   var sname = name_Box.value;
   var branch = branch_Box.value;
   var phy = phy_Box.value * 1;
   var che = che_Box.value * 1;
   var math = math_Box.value * 1;

   var obj = {
      rollno, sname, branch, phy, che, math
   }
   students.push(obj)
   setObjectIntoTable(obj);
   console.log(students)
   console.log(obj)

}
function deleteObject() {
   var index = this.getAttribute('data-index')
   students.splice(index, 1)
   this.parentElement.parentElement.remove()
}

function setObjectIntoTable(obj) {
   var tr = document.createElement('tr');

   var td1 = document.createElement('td');
   td1.innerText = students.length + 0;
   tr.appendChild(td1);

   var td2 = document.createElement('td');
   td2.innerText = obj.rollno;
   tr.appendChild(td2)

   var td3 = document.createElement('td');
   td3.innerText = obj.sname;
   tr.appendChild(td3)

   var td4 = document.createElement('td');
   td4.innerText = obj.branch;
   tr.appendChild(td4)

   var td5 = document.createElement('td');
   td5.innerText = obj.phy;
   tr.appendChild(td5)

   var td6 = document.createElement('td');
   td6.innerText = obj.che;
   tr.appendChild(td6)

   var td7 = document.createElement('td');
   td7.innerText = obj.math;
   tr.appendChild(td7)

   var td8 = document.createElement('td');
   td8.innerText = obj.phy + obj.che + obj.math;
   tr.appendChild(td8)

   var td9 = document.createElement('td');
   var btn = document.createElement('button')
   btn.innerText = "Delete"
   btn.setAttribute('data-index', students.length - 1)
   btn.onclick = deleteObject;
   td9.appendChild(btn)
   tr.appendChild(td9)

   tbody.appendChild(tr)
}