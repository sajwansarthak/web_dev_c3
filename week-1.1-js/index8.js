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


/// OR

function setTimeoutPromisified(time){
    /// we can create a funciton inside this function then return it 
    function doSomething(){
        setTimeout(resolve,time);
    }
    return new Promise(doSomething)
}

function callback(){
    console.log("time have passed")
}

const p1 = setTimeoutPromisified(5000)
p1.then(callback);

