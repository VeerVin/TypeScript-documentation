// Generics

/**
 * Generics is a methods or tool for creating reusable components that can work on variety of
 * Types than a single one.
 * 
 * So this helps user to create a component which works for all types and also create there own types
 * using classes.
*/

// Simple generic component example: Suppose we have function which echo value

function echo(arg: any) : any {
    return arg;
}

/**
 * So the above code is simple generic component example. It will accept all types of values and return that 
 * value. But we are actulay losing what type of value was when the function returns the value.
 * 
 * Suppose if we pass a number or a string the only information we have is the any type can be returned.
*/

let names: string = echo(1); // output: 1, but 1 is not string.

/**
 * In the above variable decalrtion you can see echo is returning value '1' which is of type number.
 * And the variable 'names' is accepting the type to be 'string' but it is getting value '1' which
 * is of type number, and it is not showing error, how to solve this?
 * 
 * So we need a way to capture the type of argument passed, so that we can also use it to set 
 * the reurn type also.
 * 
 * We will use type variable that works on types rather than value: <T>
*/

function echoType<T>(arg: T) : T {
    return arg;
}

/**
 * So above is the synatx to capture the Type user has provided. Here you can see we have used 'T'
 * as return type of function and gave it to argument/paramters also. This help us to get the type
 * information provided by the user and also return the Type information from generic component.
 * 
 * So now if i do:  'let firstName: string = echoType(1);' it will show compile time error.
*/

let firstName: string = echoType(1); // Output: Type '1' is not assignable to type string.

/**
 * So this version of the identity function is generic. Unlike using 'any', it dosent loses the type
 * information passed to the paramter and the return type we are accept to get from the function.
 * 
 * Note: Generics can assigned to interface, classes and functions.
*/

// You can added multiple type also:

function echoTypes<T, S>(lName: T, point: S): S {
    let returnType = typeof point;
    if (returnType === 'number') {
        return point;
    }
    
}

let lastName: number = echoTypes('Singh', 3);

// One more example:

function echoTypeArr<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

let total: number[] = echoTypeArr([1, 2, 3]);

/**********************************************************************/

// Generics and Classes:

class Person {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullname() {
        return this.firstname + ' ' + this.lastname;
    }
}

class Admin extends Person {

}

class Security extends Person {

}

let access = new Admin('Anil', 'Kumar');
let watchMan = new Security('Sunil', 'Kalaa');

/**
 * Above we have created a 'Person' class with 'firstname', 'lastname' property and 'getFullName()'
 * method. 'Person' is having two more extended classes 'Admin' and 'Security'. This are having
 * access to memebers of class 'Person'. 
 * 
 * Then we have created one variable 'access' which have access to 'Admin' class and a variable
 * 'watchMan' which have access to 'Security' class.
*/

function personEcho<T>(person : T) : T {
    person.firstname;
    return person;
}

/**
 * Above we have created a Generic function 'personEcho' to which we are passing a Class and it return
 * us that class. And in code below code:
 * 
 * let foo = personEcho(access);
 * 
 * 'foo' is showing the correct type which we have passed to generic function, which is right now is of 
 * type 'admin'.
 * 
 * But you notice we are not able to access 'firstName' property of Class 'Person', although 
 * 'access' is of type 'Admin' and 'Admin' extends class 'Person'.
 * 
 * So have to access memebrs of class 'Person' in function 'personEcho'? in same ways as we create
 * the prototype class. we have to extend 'T', syntax:
 * 
 * function personEcho<T extends Person>(person : T) : T
 * 
 */

let foo = personEcho(access);

// So now create a Generic function which extends 'Person' class:

function echoOfPerson<T extends Person>(person : T) : T {
    person.firstname = 'Gautam';
    person.lastname = 'Anand';
    person.getFullname();
    return person;
}

let me = echoOfPerson(watchMan);
console.log(me.firstname); // Output: 'Gautam'
console.log(me.lastname); // Output: 'Anand'
console.log(me.getFullname()); // Output: 'Gautam Anand'
