console.log("Heellooo");
function nice(name) {
    console.log("Hey " + name + " you are nice")   
}
// nice("ayush")
// nice("Rahul")
// nice("Saifu")
function sum(a, b, c=3) {

    //console.log(a+b)
    return a+b+c;
}
// sum(3,5)
// sum(6,7)
// console.log(sum(3,5))
// z = sum(2,5)
// z1 = sum(6,7)
// console.log(z+z1)
console.log(sum(2,3,1))

const funct1 = (x)=>{
    console.log("Arroww " + x)
}
funct1(45)
funct1(1)