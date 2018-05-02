
// Constructor Function
function Circle(radius) {
    // reference to object that execute 
    // this piece of code
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }`
)

const circle = new Circle(1);
const circle1 = new Circle1(1);

// Result of both is equal
console.log('Real circle\n',circle);
console.log('circle1\n', circle);

