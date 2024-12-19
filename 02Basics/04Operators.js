//In JavaScript, operators perform operations on variables and values

// 1. Arithmetic Operators
var x = 5;
var y = 2;
 
console.log(x + y); // Output: 7
console.log(x - y); // Output: 3
console.log(x * y); // Output: 10
console.log(x / y); // Output: 2.5
console.log(x % y); // Output: 1
console.log("= = = = = = = = = = = = = = = = = = = = = = ");
// 2. Assignment Operators
var x = 5;
x += 2;
console.log(x); // Output: 7
x -= 2;
console.log(x); // Output: 5
x *= 2;
console.log(x); // Output: 10
x /= 2;
console.log(x); // Output: 5
x %= 2;
console.log(x); // Output: 1
console.log("= = = = = = = = = = = = = = = = = = = = = = ");

// 3. Comparison Operators
console.log(5 == "5");   // Output: true   Checks if two values are equal (loose comparison)
console.log(5 === "5");  // Output: false  Checks if two values are equal & of same type (strict comparison)
console.log(5 != "5");   // Output: false  Checks if two values are not equal (loose comparison)
console.log(5 !== "5");  // Output: true   Checks if two values are not equal or not of same type (strict comparison).
console.log(5 > 2);      // Output: true
console.log(5 < 2);      // Output: false
console.log(5 >= 5);     // Output: true
console.log(5 <= 2);     // Output: false
console.log("= = = = = = = = = = = = = = = = = = = = = = ");

//4. Logical Operators
var x = 5;
var y = 2;
 
console.log((x > 2) && (y < 1)); // Output: false
console.log((x > 2) || (y < 1)); // Output: true
console.log(!(x > 2)); // Output: false
console.log(!(y < 1)); // Output: true 
console.log("= = = = = = = = = = = = = = = = = = = = = = ");

// 5. Conditional (Ternary) Operator
var x = 5;
 
console.log(x > 2 ? "x is greater than 2" : "x is less than or equal to 2");
// Output: "x is greater than 2"