// Using let for variable declarations:

let a = 10;

/* Let is declared same way as a variable decalred using 'var'. But there is more to it.
 * Variables declared using 'let' keyword have 'block scoping', by that we mean that we can't access 
 * that variable oustide its block.
*/

//  For Example if we decalre variable using 'var'

var b = 123;

if(true){
    var b = 321;
}

console.log(b) // this will print: 321.

/* So you can see '{}' is not creating any new scope, variable 'b' decalred using var are reffering to
 * same memory allocation. The varibale is same inside is block as it is outside. This is why TypeScript
 * introduced 'Let' keyword.
 * 
 * Variables decalred using 'let' keyword, will not leak out of scope. Blocked scope variable are not visible
 * outside their scope.
*/

let c = 'abc';

if(true){
    let c = 'cba';
    console.log(c); // this will print: 'cba';
}

console.log(c); // this will print: 'abc';

// One more example:

function l(){
    let d = 10;

    if(true) {
        let e = d + 1; // we can access 'd' here
        return e;
    }

    return e; // error 'e' is not avalibale in this scope
}

/* In the above example variable 'd' scope is limited to body of function 'f', so you can acces it inside
 * the if condition block/scope. And variable 'e' scope is limited to if condition block, so you can't access
 * it outside if block.
 * 
 * Another property of 'Let' (blocked scoped variable) is that you cant read them before they are decalred.
 * For example, you can access variable decalred using 'var' before they are decalred but it will return
 * 'undefined'. But if you tr it same with 'let' it will give error 'variable is not defined'.
 * Check below example:
*/

console.log(f) // will return 'undefined'
var f = 10;

console.log(g) // Error: 'g' is not defined.
let g = 100;

// Re-declarations and Shadowing

function h(x) {
    var x;
    var x;

    if (true) {
        var x;
    }
}

/* With 'var' keyword you can decalre same variable 'n' number of times. it will point to same memory 
 * allocation. This can lead to bugs.
 * 
 * But with 'let' you can't re-declare variable with same name it will trow error.  
*/

let i = 10;
let i = 20; // Error: Identifier 'i' has already been declared.

// Function parameters, y0u cant mutate parameter values using 'let', we can do that by 'var'

function j(paraValue) {
    var paraValue = 100; 
    console.log(paraValue); // will print 100
}
j('xyz');

// For 'Let' keyword we will get syntax error.

function k(abc) {
    let abc = 99; // Error: Identifier 'abc' has already been declared
}
k('xyz');

/* 'Let' declaration behaves differently inside loops, it create new scope for variable per iteration.
 * So that correct value of the variable is caught on per iterations. Check below examples, where now
 * we dont need IIFE to catch the current scope of variable and print correct value.
*/

for (let i = 0; i < 10 ; i++) {
    setTimeout(function() { 
        console.log(i); 
    }, 100 * i);
}

/* It will print:
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 * 9
*/