// interface User {
//     name: string;
//     age: number;
// };

// function sumOfAge(user1: User, user2: User){
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name: "taro", age: 20},{name: "rohan", age: 23});
// console.log(age);


//pick 
interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

// const user: User = {


// }// database call  you will get back the api with type User



//pick usage 

type UpdateProps = Pick<User,'name' |'age'|'email'>

//Partial usage 
//Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
type updatedPropsOptionally = Partial<UpdateProps>

//but if we want to change the type of the user we have to change it at two places therfore we will use pick 
function updateUser(updatedProps: UpdateProps){
    //hit the database to upgrade the user 
}


