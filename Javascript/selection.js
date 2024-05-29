//WAP in Javascript to ask any one number and check given number is Positive or Negative

var num = parseInt(prompt("Enter any one number :"))
var msg;
if(num > 0){
    msg = "Positive"
}
else{
    msg = "Negative"
}

document.write(`
    <h3> 
        ${num} is ${msg} number. 
        
    </h3>

`)