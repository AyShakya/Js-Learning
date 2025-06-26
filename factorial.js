// write a program to find the factorial of any number
let a = 10;
// let fact=1;
// for (let index = 1; index <= a; index++) {
//     fact=fact*index;
// }
// console.log(fact)
let arr=[]
for (let index = 1; index <= a; index++) {
    arr.push(index)
}
const fact = (a,b)=>{
    return a*b
}
console.log(arr.reduce(fact))