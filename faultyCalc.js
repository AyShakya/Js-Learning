/*create a faulty Calculator using javascript 
This caluculator does following:
1. it takes numbers as input from user
2. it performs wrong operations as follow

+ --> -
* --> +
- --> /
/ --> **

It performs wrong operation 10% of time
*/
function sum(a,b,k){
    if(k<0.1){
        return a-b;
    }
    else{
        return a+b;
    }
}
function sub(a,b,k) {
    if(k<0.1){
        return a/b;
    }
    else{
        return a-b;
    }
}
function mul(a,b,k) {
    if(k<0.1){
        return a+b;
    }
    else{
        return a*b;
    }
}
function div(a,b,k) {
    if(k<0.1){
        return a**b;
    }
    else{
        return a/b;
    }
}
const prompt = require('prompt-sync')();
t=5;
while(t--){
    let num1 = prompt('Give first number:')
    let num2 = prompt('Give second number:')
    console.log("Calculator")
    console.log("1. Sum")
    console.log("2. Sub")
    console.log("3. Multiply")
    console.log("4. Divide")
    console.log("5. Stop")
    let chose = prompt("Choose:")
    let k = Math.random()
    let a
    if(chose==1){
        a=sum(num1,num2,k)
    }
    else if(chose==2){
        a=sub(num1,num2,k)
    }
    else if(chose==3){
        a=mul(num1,num2,k)
    }
    else if(chose==4){
        a=div(num1,num2,k)
    }
    else if(chose==5){
        break;
    }
    console.log("Your answer is:" + a)
}



