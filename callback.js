console.log("you are a hacker")
console.log("rohan is a hecker")

const callback = (args) =>{
    console.log(args);
}

const loadScript = ((src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc);
})