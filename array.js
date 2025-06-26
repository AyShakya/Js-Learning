console.log("Hello")
let arr = [1,2,3,4,5,7]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[1],arr[2],arr[0])
// arr[0] = 5666;
// console.log(typeof arr);
// console.log(arr.toString())
// console.log(arr.join("and"))
// console.log(arr.pop())
// arr.push("yop")
// arr.push(100)
// console.log(arr)
// console.log(arr.shift())

// arr.unshift(100)
// console.log(arr)
// delete arr[5]
// console.log(arr)
// let a1=[1,2,3]
// let a2=[4,5,6]
// let a3=[2.4,6]
// console.log(a1.concat(a2,a3))// it does not add the array in the location it only displays this

let b=[5,7,3,2,1,5,6]
// b.sort()
// console.log(b)
// console.log(b.splice(1,2))
// console.log(b)

// console.log(b.splice(1,2, 22, 44, 55))
// console.log(b)

// console.log(b.slice(5))
// console.log(b.slice(1,3))
// console.log(b.reverse())

let c=[1,93,5,6,88]
// for (let index = 0; index < c.length; index++) {
//     const element = c[index];
//     console.log(element)
// }

// c.forEach((value, index, arr) => {
//     console.log(value, index, arr)
// });
// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)
//     }
// }

// for (const element of c) {
//     console.log(element)
// }
// let newArr =[]
// for (let index = 0; index < c.length; index++) {
//     const element = c[index];
//     newArr.push(element**2)
// }

let newArr = c.map((e, index, array)=>{
    return e**2
})

// const GT7 = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(newArr.filter(GT7))

//or

// console.log(newArr.filter((e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }))

// const red = (a,b)=>{
//     return a*b
// } 
// console.log(c.reduce(red))

console.log(Array.from("Ayush"))
