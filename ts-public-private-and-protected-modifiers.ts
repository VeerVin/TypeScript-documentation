// Member Access Modifiers

/**
 * In TypeScript we have 3 Member Access Modifiers which were not avaiable in JavaScript.
 * The three Member Access Modifiers are:
 * public
 * private
 * protected
 * 
 * Public:
 * By Default all the properties and methods defined without any Member Access Modifiers are public
 * in nature. By that what we mean is, all the methods and properties of class can be used outside 
 * of its decalration.
 * 
 * Private:
 * When a memebr of class either property or method is decalred as private you cant access it 
 * outside of the class. 
 * 
 * Protected:
 * When a memebr of class either property or method is decalred as protected you can acess it 
 * with in the class and with in the extend class.
 * 
 * Lets look at the examples now:
*/

// Public: 

/**
 * All the memders of class defined without memeber access modifer is by default public.
 * That means we can access those members within class, Object defined by those class and 
 * the extended classes
*/

class forPublicExm {

    /**
     * You can add 'public' before decalring 'firstName', 'lastName' and
     * 'getFullName()' but there is no need it will just make your code more loud
    */

    firstName: string = 'Veer'; 
    lastName: string = 'Singh';

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class forPublicNew extends forPublicExm {
    
}

var getName = new forPublicNew();

console.log(getName.firstName); // output: 'Veer'
console.log(getName.lastName); // output: 'Singh'
console.log(getName.getFullName()); // output: 'Veer Singh'

// So in the above example you can see 'forPublicNew' have access to all the members of 'forPublicExm'

// Private: 

/**
 * All the memders of class defined with private cannot be accessed outside of its class.
 * So how does you access this private properties and methods outside its class?
 * 
 * For example:
*/

class forPrivateExa {
    private firstName: string;
    private lastName: string;


}

var getPrivateMembers = new forPrivateExa();
getPrivateMembers.firstName; // You cant access it, you will get error, so how you will access the value?

// So the work around is:

class forPrivateExaTwo {
    private firstName: string;
    private lastName: string;

    getFirstName(fName: string) {
        return this.firstName = fName;
    }

}

var getPrivateMembersTwo = new forPrivateExaTwo();
getPrivateMembersTwo.getFirstName('Veer'); // output: 'Veer'

// What if methods is set as private?

class forPrivateExaThree {
    private firstName: string;
    private lastName: string;

    private getFisrtName(fName: string){
        return this.firstName = fName;
    }

    private getLastName(lName: string) {
        return this.lastName = lName;
    }

    getFullName(fName: string, lName: string){
        return this.getFisrtName(fName) + ' ' + this.getLastName(lName);
    }
}

var getPrivateMembersThree = new forPrivateExaThree();
getPrivateMembersThree.getFullName('Veer', 'Singh'); // Output: 'Veer Singh'

// Protected:

/**
 * When a member of class is decalred as protected, you can access that memeber with in the class
 * and in the class which is extend of the parent class. You canot access it outside the class/not extended
 * class. For example:
*/

class forProtectedExa {
    protected firstName: string;
    protected lastName: string;
}

var getProtectedMemebers = new forProtectedExa();
getProtectedMemebers.firstName; // You cant access it, you will get error, so how you will access the value?

// Check the example of private. to know how to access protected members.

// Second example, protected member can als be accessed in extended class

class forProtectedExTwo {
    protected firstName: string;
    protected lastName: string;
}

class gotProEx extends forProtectedExTwo {
    getFullName(fname: string, lname: string) {
        this.firstName = fname;
        this.lastName = lname;
        return this.firstName + ' ' + this.lastName;
    }
}

var getProtectedName = new gotProEx();
getProtectedName.getFullName('Veer', 'Singh'); // output: 'Veer Singh'

// There is one more Memmber Access Modifier called 'readonly', you cant change or mutate the value
// you can can only read it.
