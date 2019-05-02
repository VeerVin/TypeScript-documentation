// Enums

/**
 * Enums allow us to define a set of named constants. Using enums can make it easier to document 
 * intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
*/

// Enum Syntax:

enum Shapes {
    square,
    rectangle,
    triangle,
    circle
}

/** 
 * This is basic Enum syntax, above Enum contains 4 shape properties. By default if you dont provide any
 * value, the enums will be inceremnted by '1'. By that I mean: the constants will start holding value from 
 * 0 and then next value will be inceremnted by one and so on.
*/

Shapes.square // Output: 0
Shapes.rectangle // Output: 1
Shapes.triangle // Output: 2
Shapes.circle // Output: 3

// You can change the value also:

enum Peoples {
    jhon = 20,
    ryan, // As mentioned above this will be incremented by '1', so the current value will be: '21'
    mark = 100,
    steve // This value will be incremented by '1', and it will hold value '101'
}

Peoples.jhon; // Output: 20
Peoples.ryan; // Output: 21
Peoples.mark; // Output: 100
Peoples.steve; // Output: 101

// You can pass this enums to functions also:

function getPeople(countofMark: Peoples) {
    console.log(countofMark); // Output: 100
}

getPeople(Peoples.mark); 

// In The above function 'countofMark' parameter is of type 'Peoples' and holding value of 'Peoples.mark'

// String Enums:

/**
 * For string Enums we have to provide all the Enum properties a value, otherwise it will show error.
 * So in below Enum 'Directions' you can see we have provided all the required values, which that property
 * will hold.
*/

enum Directions {
    top = 'Top',
    right = 'right',
    left = 'left',
    down = 'down'
}

Directions.top; // Output: 'Top'
Directions.right; // Output: 'right'
Directions.left; // Output: 'left'
Directions.down; // Output: 'down'

// Heterogeneous enums: mixing strings with numbers

enum Stop {
    yes = 1,
    no = 'No'
}

// But this is not recomended.
