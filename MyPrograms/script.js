function checkDate()
{
     
   
    var d = Date(Date.now()); 
  
  // Converting the number of millisecond in date string 
  a = d.toString() 
  
  // Printing the current date                     
  alert("The current date is: " + a)  ;

}
function Greet()
{

    var f_name=prompt("Enter Your First Name");
    var l_name=prompt("Enter Your Last Name");
    alert("Hello !"+" "+  f_name + l_name  +"  " +  "Welcome To Our Site" );

}

function addNumbers()
{

    var no1=prompt("Enter first Number ");
    var no2=prompt("Enter second Number ");
    var sum;
    sum=Number(no1) + Number(no2);
    alert("Sum is ="+ sum);
}