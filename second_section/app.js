
// Constructor Function
function Circle(radius) {
    // reference to object that execute 
    // this piece of code
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// these two expression give same result
const circle = Circle.call({}, 1);
const circle1 = new Circle(1);