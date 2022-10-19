/*Write a JavaScript program to get 
the volume of a Cylinder, Sphere and 
Cone with four decimal places using 
objects and classes.
Create classes for volumes for each 
geometric shape which returns the
output using the getVolume() method.
eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);
obj.getVolume();
Formulas for volumes of the shapes-
1) Cylinder- Volume = πr2h
where r is the radius and h is the height of the cylinder.
2)Sphere- Volume= 4/3πr3
where r is the radius
3) Cone- Volume= πr
2h/3
where r is the radius and h is the 
height of the cone.*/

class Cylinder {
    constructor(radius, height, pi) {
        this.radius = radius;
        this.height = height;
        this.pi = 3.1415;
    }
    get volume() { 
        return this.calculateCylinderVolume(); 
    }
    calculateCylinderVolume() {
        return (this.pi * (this.radius * this.radius) * this.height).toFixed(4)
    }
}
const cylinderVolume = new Cylinder(20, 15)

console.log(`Volume of subject Cylinder is ${cylinderVolume.volume}`)

/*--------------****-------------- */

class Sphere extends Cylinder {
    get volume() {
        return this.calculateSphereVolume();
    }
    calculateSphereVolume() {
        return ((4/3)* (this.pi) * (this.radius * this.radius * this.radius)).toFixed(4)
    }
}

const sphereVolume = new Sphere(20)

console.log(`Volume of subject Sphere is ${sphereVolume.volume}`);

/*-----------------*---------------*/

class Cone extends Cylinder {
    get volume() { 
        return this.getConeVolume()
    }
    getConeVolume() {
        return (this.pi * (this.radius * this.radius) *(this.height / 3)).toFixed(4)
    }
}

const coneVolume = new Cone(10, 10)
console.log(`Volume of subject Cone is ${coneVolume.volume}`);
