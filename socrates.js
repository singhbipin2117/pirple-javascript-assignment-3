/**
 * 
 * Homework Assignment #3: Statements and Operators
 * Checckig Socrates is mortal or not
 * 
 */

const mortals = ["Bipin", "Ajay", "Socrates", "Rahul", "Ashish", "Khushbu"];

const mortalLength = mortals.length // getting length of  the mortals array

// Checking mortals is empty

if(mortalLength > 0) {
    // checking socrats is mortal or not
    if ( mortals.indexOf("Socrates") > -1) {
        console.log("Socrates is mortal");
    } else {
        console.log("Socrates is not mortal");
    }
} else {
    console.log("No men is mortal");
}


/**
 * 
 * Extra credit
 * 
 */

const cake = ["vanilla", "chocolate"];
const cakeLength = cake.length;
for (let i = 0; i < cakeLength; i++) {
    if (cake[i] == "chocolate"){
        console.log("Cake is chocolate");
    } else {
        console.log("Cake is vanilla");
    }
}