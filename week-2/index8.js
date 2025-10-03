/// promises 


function setTimeoutPromisified(time){
    return new Promise(function(resolve){
        setTimeout(resolve,time);
    })
}

function callback(){
    console.log("time have passed")
}

const p = setTimeoutPromisified(5000)
p.then(callback);




