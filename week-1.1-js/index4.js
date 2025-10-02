/// js provide some inubild classes for us like date map
const now = new Date()
console.log(now)
console.log(now.getMonth())
console.log(now.getDay())

///similarly we have the map function which help us create key value pair in a cleaner way 

const map = new Map();
map.set("name","sarthak");
map.set("age",20)
console.log(map.get("name"))
console.log(map.get("age"))