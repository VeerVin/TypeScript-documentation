// Destructuring and Spread 

/* The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack 
 * values from arrays, or properties from objects, into variables.
*/

// Array Destructring

let arr: any[] = [1, 'abc', true];

// What if we want to access each array value? we can do arr[0] right? is there any other way?

let [arrNum, arrString] = arr;

/* So what does the above code do? it will fetch the values from array 'arr' from the left-hand side.
 * so 'arrNum' and 'arrString' will hold value '1' and 'abc'.
*/

console.log(arrNum); // get value: 1
console.log(arrString); // get value: 'abc'

/* This creates two new variables named 'arrNum' and 'arrString'. This is equivalent to using indexing, 
 * but is much more convenient:
*/

let first = arr[0];
let second = arr[1];

// We can assign values to variables via destructring, seprate from variable declarations

let one, two, three;

[one, two, three] = [1, 'zxy', false];

console.log(one); // 1
console.log(two); // 'zxy'
console.log(three); // false

// We can assign default values also if the variable intial value is 'undefined'

let four, there;

[four = 'i am 4', there = 'Hi there'] = [false];

console.log(four); // false
console.log(there); // 'Hi there'

// Swaping variables,  we have two variables we want to swap the values:

let six = 'I am 6';
let seven = 'hola!';

[six, seven] = [seven, six]; // now variable 'six' will have 'seven' value and 'seven' will have 'six' value

console.log('six value:' + six); // 'hola!'
console.log('seven value:' + seven); // 'I am 6'

// Functions and destructuring

// We can destructur array passed to a functions as parameters

function de([a, b]) {
    console.log(a); // output: 9978
    console.log(b); // 'cya!'
}

de([9978, 'cya!']);

// We can destructr a returned array from a function

function deRe() {
    return [false, 77];
}

let aa, bb;
[aa, bb] = deRe();

console.log(aa); // false
console.log(bb); // 77

// Ignoring some returned values

function fRe() {
    return [1, 2, 3];
}

let ff, rr;
  
[ff, , rr] = fRe();
console.log(ff); // 1
console.log(rr); // 3

// Of course, since this is JavaScript, you can just ignore trailing elements you don’t care about:

let [takeFirst] = [1, 2, 3, 4];
console.log(takeFirst); // outputs 1

let [, takesecond, , takefourth] = [1, 2, 3, 4];
console.log(takesecond); // outputs 2
console.log(takefourth); // outputs 4

// Note: check how we are targeting second and fourth array value, by adding empty ',,'

// Object destructuring

let obj = {
    objNum: 42, 
    objBoolean: true
};

let {objNum, objBoolean} = obj;

console.log(objNum); // 42
console.log(objBoolean); // true

// Spread:

/* The spread operator is the opposite of destructuring. It allows you to spread an array into another 
 * array, an object into another object and function parameters into an array.
*/

// Example: parameters as spread operators in a function

function fnSpread(...print){
	console.log(print);
}

fnSpread(1, true); // output: [1, true]

// Example: Adding two arrays

let firstArr = [1, 2];
let secondArr = [3, 4];
let bothPlus = [0, ...first, ...second, 5];

console.log(bothPlus) // output: [0, 1, 2, 3, 4, 5];

// Example: using spread in objects

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

console.log(search); // output: {food: "rich", price: "$$", ambiance: "noisy"}

/* See how in search 'food' property was mutated. So while using spread in object check for
 * same property names, otherwise values will be mutated.
*/