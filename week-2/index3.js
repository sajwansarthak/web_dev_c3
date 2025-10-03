/// creating class in js
/// instance is just an object of a class
class rectangle{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width*this.height;
        return area;
    }

    paint(){
        console.log("the color is " + this.color)
    }
}

const rect = new rectangle(12,12,"red");/// here we are creating the instance of the rectangle class or object of the rectangle 
const rect2 = new rectangle(11,11,"blue");
const area = rect.area()
const area2 = rect2.area()
const paint = rect.paint()
console.log(area)
console.log(area2)