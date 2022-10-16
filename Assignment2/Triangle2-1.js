//Problem : Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

//First find whats the meaning of these fancy words

//Google ref If none of the sides of a triangle are equal (of equal length), the triangle is scalene. If two or more of the triangles sides are equal, the triangle is isosceles. If all three of the sides of a triangle are equal, it is equilateral.
let triangle = {
    "a": 10,
    "b": 15,
    "c": 10
}
//Check for matching values and output accordingly
const checkTriangle = (triangle) => {
    if (triangle.a === triangle.b && triangle.b === triangle.c) {
        console.log("Its a euilateral Triangle");
    } else if (triangle.a === triangle.b || triangle.b === triangle.c || triangle.c === triangle.a) {
        console.log("its a isosceles Triangle");
    } else {
        console.log("Its a scalene Triangle");
    }
}

checkTriangle(triangle)