function cal()
      {
        var x = document.getElementById('fnum').value*1;
        var y =  document.getElementById('snum').value*1;
        var op = document.getElementById('option').value;
        var z = document.getElementById('res');

        if(op == 1)
        {
         var z = x + y;
        }
        if(op == 2){
         var z = x - y ;
        } 
        if(op == 3){
         var z = x / y ;
        } 
        if(op == 4){
         var z = x * y ;
        } if(op == 5){
         var z = x % y ;
        }
        res.innerText = z ;
      }