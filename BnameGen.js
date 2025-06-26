/*
Create a buisness name generator by combining list of adjectives and shop name and another word

Adjective:
Crazy
Amazing 
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

Restrictions : No use of Arrays
*/

let rand1=Math.random()
if(rand1<0.33){
    first = "Crazy"
}
else if(rand1<0.66 && rand1 >=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}
let rand2=Math.random()
if(rand2<0.33){
    second = "Engine"
}
else if(rand2<0.66 && rand2 >=0.33){
    second = "Foods"
}
else{
    second = "Garments"
}
let rand3=Math.random()
if(rand3<0.33){
    third = "Bros"
}
else if(rand3<0.66 && rand3 >=0.33){
    third = "Limited"
}
else{
    third = "Hub"
}
console.log(`${first} ${second} ${third}`)

