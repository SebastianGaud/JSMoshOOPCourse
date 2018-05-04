
/*
    Declare variables inside object as let make 
    it private and not accessibile from outside
*/ 
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {
        x: 0,
        y: 0
    }

    let computeOptimumLocation = function (factor) {
        console.log(factor);
    }

    this.draw = function () {
        computeOptimumLocation(0.1);
        
        console.log('draw');
    }
}

const circle = new Circle(10);