
// Constructor Function
function Circle(radius) {
    // reference to object that execute 
    // this piece of code
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}


// return the name of "class"
console.log('Name\n', Circle.name);

//return number of parameters
console.log('Number of parameters\n', Circle.length);

// return the function that creates this object
console.log('Who create this object\n', Circle.constructor);
