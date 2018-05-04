
/*
    Declare variables inside object as let make 
    it private and not accessibile from outside
*/ 
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {
        x: 0,
        y: 0
    };

    this.draw = function () {
        console.log('draw');
    };


    Object.defineProperty(this, 'defaultLocation', {
        // Getter. get is a special keyword in js
        get: function () {
            return defaultLocation;
        },
        // Setter. set is a special keyword in js
        set: function (value) {
            // We can write custom validation in setter this way
            if (!value.x || !value.y) {
                throw new Error('Invalid location')
            }
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);