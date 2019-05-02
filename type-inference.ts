// Type Inference

/**
 * When does Type inference happen in TypeScript?
 * 
 * inference meaning: a conclusion reached on the basis of evidence and reasoning.
 * 
 * And this type inference is not always right. We will check below why? and what is the best
 * practise.
*/

let xy = 10;

/**
 * In 'let xy = 10;' we have not defined that 'xy' is a variable of type number. But still
 * TypeScript inferred and made a decision that 'xy' is of type 'number'  which is correct.
 * 
 * So whenever you dont define the type TypeScript will do its best to guess the type.
 * 
 * For example look at below example:
*/

let aq = [0, 1, null];

/**
 * In the above variabale decalration TypeSCript inferred that 'aq' is of type number.
 * Although we have 'null' decalred in the array. Because the best common type has to 
 * be chosen from the provided candidate.
 */

// Another example:

let ws = 5;

let df = ws + 'I am string';

console.log(df); // Output: 5I am string
console.log(typeof df); // Output: string

/**
 * That is weired right? it should have given us error, TypeScript inferred and said that it is
 * string and we got following output.
 * 
 * So it is always best that you define the type of value the variable will be storing, so that
 * you dont get into this type of issue.
*/
