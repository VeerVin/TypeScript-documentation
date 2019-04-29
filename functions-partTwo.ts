// Functions Part Two

// Rest Parmeters (...NameOfTheParamter it will be an array)

/**
 * Sometimes you may not know how many paramters are passed to a function or how many
 * parmeters a function will take.
 * 
 * And in some cases you want the passed prameters with same type as in an array. So how to achieve
 * this is TypeScript.
 * 
 * To achieve this we use spread operator, spread operator is nothing but a variable, 
 * which is collection of type in an array.
 * 
 * For example:
*/

function allPrarameters(firstName: string, lastName: string, ...address: string[]) {
    console.log(address); // What this will print?
}

allPrarameters('Veer', 'Singh', '1st Main', '2nd cross', 'Locality Name', 'City');

/**
 * The above code will print:
 * 0: "1st Main"
 * 1: "2nd cross"
 * 2: "Locality Name"
 * 3: "City" 
 * 
 * In The above code You can also see, I have defined the type of value the 'address'
 * array will store. i.e is string.
*/

// Arrow Functions or Fat Arrow functions

/**
 * So to understand arrow fucntions lets look at an simple example of normal function. 
 * The below 'getFullName' function is the normal way we define a function in JavaScript.
 * But in TypeScript we have '=>' functions, lets use '=>' arrow to rewrite the below
 * function.
*/

let getFullName =  function (firstName, lastName) {
    return firstName + ' ' + lastName;
}

getFullName('Veer', 'Singh');

// Rewrite above function using '=>'

var getFullNames = (firstName: string, lastName: string) => {
    return firstName + ' ' + lastName;
}

getFullNames('Veer', 'Singh');

/**
 * So in the above example you can see we have removed the name 'function' and instead of that
 * we have added '=>' before the opening '{' curely braces. And then the normal function code.
 * 
 * But we can reducae this more. we can remove the 'return' keyword and '{' braces, the TypeScript
 * compiler will add those, when it will conver the code to JavaScritp. the code will look like:
*/

var getlastName = (lastName: string) => lastName;

/**
 * So small arrow function like above example, we can remove the 'return' keyword.
 * And the curly braces. The typeSCript compiler will take care of it when converting it to JavaScritp.
 * 
 * Note in the above code you can remove the '()' parantheses also but then you have to pass
 * paramter with any type defination. And you cant add muiltiple paramters works only for single
 * paramter. SO the above code will become:
 * 
 * var getlastName = lastName => lastName;
 * 
*/

// Lets look at other uses of fat arrow functions. look at the below example

let getFirstName = {
    fName: 'Veer',
    getFirstName: function() {
        return function firstName() {
            console.log(this.fName);
        }
    }
}

let firstName = getFirstName.getFirstName()
firstName(); // Output: undefined

/**
 * But why we are getting 'undefined'? this is becuase in JavaScript objects if you add
 * function inside another function the 'this' keyword will point to 'Window' object
 * rather that the 'getFirstName' object which you have created. so how to solve this?
 * 
 * in Javascript we used to assign the 'this' keyword to a varibale like self and use the 
 * variable inside all nested functions, so that this keyword is pointing to correct 
 * object.
 * 
 * But Arrow functions can be used to avoid this issue. we will make return function to an
 * fat arrow function.
*/

let getLastName = {
    LName: 'Singh',
    getLastName: function() {
        return () => {
            console.log(this.LName);
        }
    }
}

let lastName = getLastName.getLastName()
lastName(); // Output: 'Singh'

// Read this to understand how 'this' behaves in JS: 
// https://yehudakatz.com/2011/08/10/understanding-javascript-function-invocation-and-this/
// https://www.typescriptlang.org/docs/handbook/functions.html