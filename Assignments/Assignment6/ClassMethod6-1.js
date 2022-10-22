/*Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area
of a Square object.8*/

//Create Rectangle class
class Rectangle {
    constructor(x, y){
        this.x = x;
        this.y = y
    }
    // set getter function
    get area(){
        return this.areaValue()
    }
    //set area value function
    areaValue(x, y){
        return this.x * this.y;
    }
}

//Set square a subclass of Rectangle
class Square extends Rectangle{
    //Call constructor
    super(){
    }
}

//Make new object of Square and pass values
const square = new Square(15, 15);

//log result
console.log(square.area);

