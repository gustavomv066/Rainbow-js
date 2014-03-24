var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);

function colors()
{
	
}


function calculate()
{
  var input = document.getElementById("input");
  var str = input.value;
  var str = str.split("");
  var operationType;
  var number='' , number1 , number2;

   for(var i=0 ; i < str.length ; i++ )
   {

     if( !isNaN(str[i]) )
     {
       number = number + str[i];
     }
     else
     {
       number1 = number;
       number='';
       if(str[i] == '+')
       {
         operationType = 1;
       }
       else if (str[i] == '-' )
       {
         operationType = 2;
       }
       else if (str[i] == '*' )
       {
         operationType = 3;
       }
       else if(str[i] == '/' )
       {
         operationType = 4;
       }
       else
       {
         operationType = 5;
       }
     }
   }
   number2 = number;
   if(operationType != 5 && number2 != undefined && number1 != undefined)
   {
       if(operationType == 1 )
       {
         result = parseInt(number1, 10) + parseInt(number2, 10);
       }
       else if(operationType == 2 )
       {
         result = number1 - number2;
       }
       else if(operationType == 3 )
       {
         result = number1 * number2;
       }
       else if(operationType == 4 )
       {
         result = number1 / number2;
       }
       alert(result);

   }
   else{
     alert('operacion no valida ');
   }

}