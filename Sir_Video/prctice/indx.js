var Emp = []

var id_box = undefined;
var name_box = undefined;
var dept_box = undefined;
var sal_box = undefined;
var join_box = undefined;
var tbody = undefined;


function init()
{
      id_box = document.getElementById('idBox');
      name_box = document.getElementById('nameBox');
      dept_box = document.getElementById('departBox');
      sal_box = document.getElementById('salBox')
      join_box = document.getElementById('joinBox')
      tbody = document.getElementById('tbody')

      var empdata = localStorage.getItem("Emp_data")
      if(empData!=null){
         var arr = JSON.parse(empData)
         for(var ob of arr){
            Emp.push(ob)
            setObjIntoTable(ob)
         }
      }
}

function addEmp()
{
   var id =   id_box.value;
   var name = name_box.value;
   var dept = dept_box.value;
   var sal =  sal_box.value;
   var join = join_box.value;

   var obj = {
      id,name,dept,sal,join
   }
   setObjIntoTable(obj);
   Emp.push(obj)
   console.log(obj);
}

function setObjIntoTable(obj)
{ 
   var tr = document.createElement('tr');

   var td1 = document.createElement('td');
   td1.innerText = Emp.length + 0;
   tr.appendChild(td1);
   var td2 = document.createElement('td');
   td2.innerText = obj.id;
   tr.appendChild(td2);

   var td3 = document.createElement('td');
   td3.innerText = obj.name;
   tr.appendChild(td3);

   var td4 = document.createElement('td');
   td4.innerText = obj.dept ;
   tr.appendChild(td4);

   var td5 = document.createElement('td');
   td5.innerText = obj.sal;
   tr.appendChild(td5);

   var td6 = document.createElement('td');
   td6.innerText = obj.join;
   tr.appendChild(td6);

   tbody.appendChild(tr)
}

function saveEmp(){
       if(Emp.length > 0){
         var str = JSON.stringify(Emp);
         var str1= localStorage.setItem("Emp_data",str)
         console.log(str1)
       }
       else{
         alert("No data to be set")
       }
}