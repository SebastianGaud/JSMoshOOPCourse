function Circle(radius) {
    // Instance member
    this.radius = radius;
}

const c1 = new Circle(1);
const c2 = new Circle(2);

// Prototype member
Circle.prototype.draw = function () {
    console.log('I\'m drawing');
}

// At this point Circle object has only one property 'radius'
console.log(c1);

// but draw was added to its prototype so it available at circle object without waste memory
// so we have draw method in every instance of circle class trough its prototype
console.log(c1.draw());
console.log(c2.draw());

// At this point circle has default implementation of to string
console.log(c1.toString()); 
// [Output] -> [Object object]

// We add a custom implementation to its prototype
Circle.prototype.toString = function () {
    // We can access property or function of an object in its prototype
    return `Circle with radius ${this.radius}`
}

console.log(c1.toString());
// [Output] -> "Circle with radius" {radius pass at ctor}


