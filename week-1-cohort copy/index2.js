function canVote(age){
    if(age>18){
       return true
    }else{
        return false
    }
}

let ans = canVote(18)
console.log(ans)

let user1 ={
    name:"sarthak",
    age:19,
    gender:"male"
}

console.log(user1.name)
console.log(user1['name'])