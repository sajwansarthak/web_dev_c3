function solve(arr){
    let arr2 = [];
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i].gender == "male" && arr[i].age>18){
            arr2.push(arr[i])
        }
    }
    return arr2;
}

const users = [{
    name:"sarthak",
    age:19,
    gender: "male"
},{
    name:"rohit",
    age:40,
    gender: "male"
},{
    name:"shubham",
    age:15,
    gender: "male"
},{
    name:"sunita",
    age:50,
    gender: "female"
}]
const ans = solve(users);
console.log(ans)

