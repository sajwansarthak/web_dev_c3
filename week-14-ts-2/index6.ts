//Arrays in ts 


function getMax ( nums: number[]){

}

interface User9 {
    firstName: string;
    lastName: string;
    age: number;
}

function filterUsers( userss : User9[]){
    // return userss.filter((user) => user.age > 18)   we should use filter 

    let ans = []
    for( let i =0 ; i < userss.length; i++){
        if(userss[i].age > 18){
            ans.push(userss[i])
        }
    }
    return ans;
}

const filteredUsers = filterUsers ([{
    firstName: "sarthak",
    lastName: "sajwan",
    age: 20,
}])

console.log(filteredUsers)