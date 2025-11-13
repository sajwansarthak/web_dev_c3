//Interfaces (this is how you define)

// interface User4 {
//     name: "sarthak";
//     age: 23
// }

//Types (This is how you define it)

type User5 = {
    name: string;
    age: 23;
}

function isLegal2 (user2 : User5) {
    return user2.age > 18;
}


//Types let you do unions and intersections 


type Employee = {
    name: string;
    dateJoined: string;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager;

let e: Employee = {
    name: "sarthak",
    dateJoined: "01-23-2023",
};

let m: Manager ={
    name: "rohan",
    department: "CSE"
};

let t: TeamLead = {
    name: "sarthak",
    dateJoined: "01-23-2023",
    department: "CSE",
};