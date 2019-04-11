// Interfaces:

/** 
 * An interface is a syntactical contract that an entity should conform to. In other words, 
 * an interface defines the syntax that any entity must adhere to.
*/

// Simple Example:

function printLabel(labelObj: {label: string}) {
    console.log(labelObj.label); // print: 'Hello!'
}

let printObj = {size: 10, label: 'Hello!'};

printLabel(printObj);

/**
 * In the above example function 'printLabel' is having one parameter which requires the object
 * which is passed to it have property 'label' of type 'string'.
 * 
 * Notice that the object which is passed to the function have more than one poperty. But the compiler
 * only checks if it have the property which the parameter is looking for. In our case 'label'.
 * 
 * So the result of the above code will be: 'Hello!'
 */

// We can write the above example, but this time using interface:

interface printObjVal {
    size: number,
    label: string
}

function printLabels(labelObj: printObjVal){
    console.log(labelObj.label); // print: Hello!
    console.log(labelObj.size); // print: 10
}

printLabels(printObj); // printObj is decalred in line no: 14, which is passed here

/**
 * The only change between this example using 'interface' and the above example is, the interface
 * 'printObjVal' is the requirement which we need. By that we mean, the values which we want to print
 * is now added into interface 'printObjVal' and that is passed to the function.
 * 
 * It’s worth pointing out that the type checker does not require that these properties come 
 * in any sort of order, only that the properties the interface requires are present and 
 * have the required type.
 * 
 * If you remove 'size' property from 'printObj' Object, then the above code will not work.
 * Because interface 'printObjVal' understand/looking that 'size' and 'label' are passed as parameters
 * to 'printObj' object.
 * 
 * So in interface you can add only the properties which you need from object, 
 * But you can't add extra properties, it will throw error.
 * 
 * To solve the above issue you can add '?' after the interface property name.
 * Check below example: 
 */

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });

/**
 * By Adding '?' after the interface property name, the property name becomes optionla by that 
 * we mean that if you dont pass either color or width to the function 'createSquare' it wll not throw error
 * and the output will be '{color: "white", area: 100}'
 * 
 * if you pass only '{ color: "black" }' to the function then the output will be: {color: "black", area: 100}
 */