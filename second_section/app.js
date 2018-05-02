
// Factory fucntion
function createCircle(radius) {
    return {
        // if the name of the value 
        // has the same name of the key we can omit the key
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);


// Constructor Function
function Circle(radius) {
    // reference to object that execute this piece of code
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const anotherCircle = new Circle(1);
anotherCircle.draw();