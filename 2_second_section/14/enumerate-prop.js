// Constructor Function
function Circle(radius) {
    // reference to object that execute 
    // this piece of code
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

// Print all key in a class and its value
// for (const key in circle) {
//     console.log(key, circle[key]);
// }

// Print all keys in a class
// const keys = Object.keys(circle);
// console.log(keys);

// Print all non function and its value
// for (const key in circle) {
//     if (typeof circle[key] !== 'function') 
//         console.log(key, circle[key]);
// }


