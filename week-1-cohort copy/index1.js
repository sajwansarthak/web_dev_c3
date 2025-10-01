function greet(user){
    if(user.gender == "male"){
        console.log("Hi Mr "+user.name+", your age is "+user.age)
    }else if(user.gender =="female"){
        console.log("Hi Mrs "+user.name+", your age is "+user.age)
    }else{
        console.log("Hi "+user.name+", your age is "+user.age)
    }
}

let user = {
    name:"laila",
    age:19,
    gender:"others"
}

greet(user)