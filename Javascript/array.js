var num = [ 5, 3, 4, 7, 14, 48, 12]
var len = num.length
even=0
odd=0
for(i =0; i<=len-1; i++){
    r = num[i]%2
    if(r==0){
        even++
    }
    else{
        odd++
    }
}

console.log("Total Even number = "+even)
console.log("Total Even number = "+odd)


// WAP in javascript store 10 different Number and 
// count total even and odd number from stotred num





