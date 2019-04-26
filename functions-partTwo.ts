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

// Arrow Functions


// Read this to understand how 'this' behaves in JS: 
// https://yehudakatz.com/2011/08/10/understanding-javascript-function-invocation-and-this/