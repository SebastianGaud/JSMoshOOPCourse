function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);
const protoOfCircle = Object.getPrototypeOf(circle);
const protoOfProtoOfCircle = Object.getPrototypeOf(protoOfCircle);
console.log("Prototype of circle:\t", protoOfCircle);
console.log("Multi level prototypes:\t", protoOfProtoOfCircle);

