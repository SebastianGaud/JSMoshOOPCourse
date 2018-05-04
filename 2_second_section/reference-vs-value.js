
// values are stored in variables
let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);

// object are stored somewhere and in the variabile
// there is a reference to the place object is stored
let z = {value: 10};
let b = z;

z.value = 20;
console.log(z);
console.log(b);