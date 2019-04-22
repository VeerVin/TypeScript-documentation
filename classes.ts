// Classes

/**
 * How do I create a Classes in TypeScript? the syntax is:
 * 
 * class Person {}; 
 * 
 * We are using the keyword 'class' and then giving the name for the
 * class, in our case 'Person' and followed by opening an closing curly braces.
 * 
 * So now that we have created a class we can assign it to a variable by creating an instance
 * of the class. How we do that? by using 'new' keyword followed by the class name.
 * 
 * var veer = new Person();
 * 
 * So now variable 'veer' will have all the methods and properties associated with class 'Person'.
 * 
 * Now lets add some members to the class 'Person':
*/

class Person {
    firstName: string;
    lastName: string;

    getFullName() {
        return this.firstName + ' ' + this.lastName; // this keyword is used to refer the instance of the class
    }
}

let veer = new Person();

veer.firstName = 'Veer';
veer.lastName = 'Singh';
veer.getFullName();

/**
 * So in the above code we have created a class 'Person' but this time we have added three members:
 * 2 properties 'firstName' and 'lastName' and one method 'getFullName'.
 * 
 * And then we are creating one variable which will have access to properties and methods of class
 * 'Person'.
 * 
 * veer.firstName = 'Veer';
 * veer.lastName = 'Singh';
 * 
 * in the above code we are assigning the value to 'firstName' and 'lastName', which is of type
 * string. In the above code line number 22 and 23, while creating the two property we have explicitly 
 * told TypeScript that the property is of type string. So if you give another type it will throw error.
 * 
 * What is happening is variable 'veer' is a type class 'Person':
 * 
 * let veer: Person = new Person(); But we dont need to write all this here.
*/

// Constructor

/**
 * We also have special method called 'constructor'. In JavaScript/TypeScript 'constructor'
 * is a special function with name 'constructor'. What it does is, it construct the Object
 * before it get assigned.
 * 
 * so in the code: let veer = new Person();
 * 
 * You are just creating an Object 'Veer' which can have properties and methods of 'Person' class
 * but right now it is empty, becuase you have not assigned any default properties or methods.
 * 
 * So how to assign those methods? by intializing a 'constructor' inside class 'Person'.
 * And adding the required properties.
 * 
 * And then pass the required 'firstName' and 'lastName' paramertes to the class Person() intialization
 * to a new variable:
 * 
 * let anil = new Persons('Anil', 'Kumar');
 * 
*/

class Persons {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

let anil = new Persons('Anil', 'Kumar');

anil.firstName; // Output: 'Anil'
anil.lastName; // Output: 'Kumar'
anil.getFullName(); // Output: 'Anil Kumar'

/**
 * In the above 'constructor' we are passing the required arguments, which is needed to create 'anil'
 * object with set values.
 * 
 * let anil = new Persons('Anil', 'Kumar');
 * 
 * so 'Anil' and 'Kumar' are the required paramters for the constructor. which is using this values to
 * set the 'firstName' and 'lastName' defined in the 'Persons' class. In this way you are getting the
 * 'anil' object with required 'firstName' and 'lastName' values set already.
*/

// Inheritance in TypeScript

/**
 * How Inheritance work in TypeScript?
 * 
 * To achieve Inheritance we use 'extend' keyword, which tells the current class that you can get methods
 * and prperties from this paticular class, syntax is:
 * 
 * class className extends classNameOftheInheitedClass {}
 * 
 * For Example:
*/

class Animal {
    animalName: string;

    doesItBark() {
        console.log('Yes it is a dog!!!');
    }

    greet() {
        console.log('meooooowwwwww!!!!');
    }
}

class Dog extends Animal {
    greet() {
        console.log('Woof! Woof!');
    }
}

let husky = new Dog();

husky.doesItBark(); // Output: 'Yes it is a dog!!!'

/**
 * So in the above example you can see by using 'extends' keyword we are able to access methods
 * defined in 'Animal' class.
*/

husky.greet(); // Output: 'Woof! Woof!'

/**
 * And we are able to overwrite 'greet()' method defined in 'Animal' class becuase we have defined
 * it inside 'Dog' class.
 * 
 * It is not actualy overriding the 'Animal' 'greet()' method, it is printing its 'greet()' method
 * becuase it is avaiable in 'Dog' class, there is no need for 'Dog' class to search it in 'Animal' class.
*/

// Super keyword uses in Inheritance

/**
 * Suppose in the above class 'dog' you have another method 'greetLikeCat()', so you are going to call
 * greet() function from 'Animals' class?
 * 
 * You can't use 'this' keyword becuase it is pointing to 'Dogs' class. It will invoke 'greet()' from
 * 'Dogs' class, you want 'greet()' from 'Animals' class. To achieve this instead of 'this' keyword
 * to invoke 'greet()' we use 'super.greet()'. 'super' keyword will point to inherited class which is
 * 'Animals' class.
*/

class Animals {
    animalName: string;

    doesItBark() {
        console.log('Yes it is a dog!!!');
    }

    greet() {
        console.log('meooooowwwwww!!!!');
    }
}

class Dogs extends Animals {
    greet() {
        console.log('Woof! Woof!');
    }

    greetLikeCat() {
        super.greet();
    }
}

let huskys = new Dogs();

huskys.greetLikeCat(); // Output: 'meooooowwwwww!!!!'

/**
 * This example show the basic inheritance feature. classes inherit properties and methods from base classes.
 * Here, Dogs is a derived class that derives from the Animals base class using the 'extends' keyword. 
 * Derived classes are often called 'subclasses', and base classes are often called 'superclasses'.
*/