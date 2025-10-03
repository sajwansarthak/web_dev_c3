/// simple promise funciton sychronous


function promisefn(resolve){
    let c = 0;
    for (let i = 0;i<=10000;i++){
        c++;
    }
    resolve("hi there sarthak")
}

function callback(str){
    console.log(str)
}
const p = new Promise(promisefn)
p.then(callback)


/// basically promise will call a function which contains an asynchronous operation and when that op gets over funciton will return its first argument will is equal to callback function 