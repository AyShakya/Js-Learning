let a = 10, b = 3;
console.log("a + b =", a + b);   
console.log("a - b =", a - b);  
console.log("a * b =", a * b);   
console.log("a / b =", a / b);   
console.log("a % b =", a % b);   
console.log("a ** b =", a ** b); 
console.log("++a =", ++a);       
console.log("b++ =", b++);       
console.log("--a =", --a);       
console.log("b-- =", b--);       
console.log("After all, a =", a, "b =", b);

let x = 5;
console.log("x =", x);
x += 3;  
console.log("x += 3 :", x);
x -= 2; 
console.log("x -= 2 :", x);
x *= 4;   
console.log("x *= 4 :", x);
x /= 2;  
console.log("x /= 2 :", x);
x %= 3;   
console.log("x %= 3 :", x);
x **= 2;  
console.log("x **= 2 :", x);

let p = 10, q = "10";
console.log("p == q :", p == q);     
console.log("p === q :", p === q);   
console.log("p != q :", p != q);     
console.log("p !== q :", p !== q);   
console.log("p > 5 :", p > 5);
console.log("p < 5 :", p < 5);
console.log("p >= 10 :", p >= 10);
console.log("p <= 10 :", p <= 10);

let cond1 = true, cond2 = false;
console.log("cond1 && cond2 :", cond1 && cond2);
console.log("cond1 || cond2 :", cond1 || cond2); 
console.log("!cond1 :", !cond1);                 

let bitA = 5;  
let bitB = 3;  
console.log("bitA & bitB =", bitA & bitB);  
console.log("bitA | bitB =", bitA | bitB);  
console.log("bitA ^ bitB =", bitA ^ bitB);   
console.log("~bitA =", ~bitA);               
console.log("bitA << 1 =", bitA << 1);       
console.log("bitA >> 1 =", bitA >> 1);       
console.log("bitA >>> 1 =", bitA >>> 1);     

let firstName = "John";
let lastName = "Doe";
console.log("Concatenation:", firstName + " " + lastName);
let greeting = "Hello";
greeting += " World!";
console.log("Using +=:", greeting);