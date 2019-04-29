// Functions Part One

/**
 * Functions are the fundamental building block of any application in JavaScript.
 * TypeScript also adds some new capabilities to the standard JavaScript functions:
 * 
 * We can sepciay the type of argument/parameters we are passing to the function
 * and the return type we are  expecting from the function.
 * 
 * Lets look at few examples:
*/

// Pramerts with specified types:

function add(a: number, b: number) {
    return a + b;
}

add(1, 2);

/**
 * So in the above example, we have a function 'add' which return the sum of two numbers.
 * In TypeScript we can specify the type of paramters, like we have done in the above example 
 * 'a: number, b: number'. What it means that 'add' function wants two paramters of type number
 * to perform sum of two numbers. If we pass a string to 'add()' function it will show compile time
 * error.
*/

// Now what if I pass three or more numbers, or 1 number to 'add' function invocation?

// Passing only one number, instead of two:

add(1);

/**
 * Typescript compiler will show error: Expected 2 arguments but got 1 instead. So it makes
 * it easy to catch error on compile time rather on run time. 
*/

// Passing three or more numbers:

add(1, 2, 3);

/**
 * This will also throw error in TypeScript, becuase 'add' function is looking for 2 parameters
 * rather than 3. So it show error: expected 2 argumnets but instead got 3. 
*/

// Same goes if you pass anyother type instead of number.

add('a', 'b');

/**
 * You can't pass another type of value when you have specified that you need numbers
 * 'a: number, b: number', TypeScript will tell you that Arguments of type string is not 
 * assignable to type number.
*/

// So what if to the 'add' function we have to pass 1 or more than 2 paramters?
// well then we have to use '?' mark to make those paramters optional, for example:

function addNumbers(a:number, b?:number, c?:number){
    return a + b + c;
}

addNumbers(5, 5); // this will return us 'NaN'

/**
 * Well now in the aboove example you can see, we are passing only two arguments and the compiler is not 
 * showing any error. So we can use '?' mark to make paramters optional. But the output is 'NaN' that
 * is worng we will look after that later
*/

addNumbers(1) // we can pass one argument also becuase 'b' is also optional

/**
 * So in the above example you saw how to make arguments/paramters optional. But the output we got 'NaN'
 * is not we are looking for, we want output as to be number. So what we can do?
*/

/**
 * Note: Before solving that issue note that after a optional prameter you can't pass a
 * required paramter like this: (a:number, b?:number, c?:number, d:number) this will give error.
 * and should not be used, why?
 * 
 * Suppose you are invoking function with two paramters now (5, 6). Typescript will
 * not be able to understand '6' is assigned to either 'b', 'c' or d. 
 * So every time an optional paramter should be follwed by another optional paramter.
 * First all required paramters will come then all optional paramters.
 */

// We can assign values in paramerts, which was not avaibale in older verion of JavaScript
// this (a:number, b?:number, c?:number) can be written in differnet way, look at below example:

function addNum(a:number, b = 0, c = 0){
    return a + b;
}

addNum(5); // Output: 5

/**
 * In the above example by setting default values to parameter 'b=0, c=0' we are telling 
 * TypeSCript that 'b and c' are two optional paramters with default values assigned to it.
 * So instead of writing 'b:number = 0' (notice we dont need '?' mark when we assign it default value,
 * it is considered as optional.) whcih is making our code loud we are assign paramters as 'b = 0, c = 0'
*/

// We can set the return type of the function also. How to do that?

function multiply(a:number, b:number) :number {
    return a * b;
}

multiply(2, 5); // Output: 10

/**
 * Now in the above example the return type should be number otherwise it will give error.
 * if I change return tpe to ': string', it will give error that type 'number' is not assignable 
 * to type 'string'.
 * 
 * If function return nothing we can add ': void' but that will be to loud.
*/
