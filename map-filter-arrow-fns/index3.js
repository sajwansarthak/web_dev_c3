//filter

const arr = [1,2,3,4,5]

//ans [2,4]

//normally
// const newArr = []

// for (let i = 0 ; i < arr.length;i++){
//     if(arr[i] % 2 == 0  ){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)


//using filter 
function filterLogic(n){
    if(n%2 == 0){
        return true 
    }else {
        return false 
    }
}

const ans = arr.filter(filterLogic)
console.log(ans)
