let person = {
    name: 'Seba'
};

const objectBase = Object.getPrototypeOf(person);
const propDescriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(propDescriptor);
/*
    [Output] -> 
    { 
        value: [Function: toString],
        writable: true,  -> we can overwrite this method
        enumerable: false, -> toString method doesn't show when iterate over object
        configurable: true -> We can delete member if we want to
    }

*/ 