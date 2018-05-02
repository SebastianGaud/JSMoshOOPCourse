

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
circle.draw();