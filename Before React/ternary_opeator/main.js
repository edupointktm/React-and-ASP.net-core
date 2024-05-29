let num = prompt("Enter any one number:")

// if(rem==0){
//     result = "EVEN"
// }
// else{
//     result="ODD"
// }

let result = num%2==0?"EVEN":"ODD"
document.getElementById('root').innerHTML = `<h1> ${result} </h1>`
