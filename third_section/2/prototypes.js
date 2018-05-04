let x = {};
let y = {};

/** 
 * Every object in js has link to BasePrototypes object 
 * prototype of x and y is the same in fact output of log is True
*/
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));


/**
 * why we can use toString on x that is empty obj?
 * Because js engine if can't find method on this obj look at its prototype until the last
 */
console.log(x.toString());

