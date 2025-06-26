
let promise = new Promise((resolve,reject) =>{
   console.log("I am promise");

   reject("Encounter some error");
   resolve("I'm fulfilled");
})
let x = prompt("Enter your name:");

promise.them(result =>{
   console.log(result);
})
let y = (a) =>{
   console.log(a);
}

function getData(dataId, getNextData){
   return new Promise((resolve, reject) => {
      setTimeout(()=>{
         console.log("data", dataId);
         resolve("success");
         if(getNextData){
            getNextData();
         }
      }, 2000);
   });
}

promise.then((resolve)=>{
   console.log("Promise here");
})
promise.catch((error)=>{
   console.log("Promise not here");
})
