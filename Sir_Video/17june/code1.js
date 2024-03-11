function cal()
      {
        var x = document.getElementById('fnum').value*1;
        var y =  document.getElementById('snum').value*1;
        var op = document.getElementById('option').value;
        var z = document.getElementById('res');

        switch(op){
         case 1 : (op == 1);
                  var z = x + y;
                  break;
         case 2 :(op == 2)
                var z = x - y ;
                break;
         case 3 :(op == 3)
                 var z = x / y ;
                 break;
         case 4 :(op == 4)
                 var z = x * y ;
                 break;
         case 5 :(op == 5)
                 var z = x % y ;
                 break;
           } 
           res.innerText = z; 
         }