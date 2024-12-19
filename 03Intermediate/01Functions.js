// A JavaScript function is a block of code designed to perform a specific task.
//  Functions are only executed when they are called (or “invoked”).

// 1. Function Declaration : It is the traditional way to define a function. 
// It starts with the function keyword, followed by function name and any parameters the function needs.

function sayHello(name){
    console.log("Hello There , Mahesh");
    console.log("Hello There, " + name);   // Output : Hello There,undefined.
}
sayHello();

console.log("= = = = = = = = = = = = = = = = = =  =")

function sayWishes(name){
    console.log("Hello There , Mahesh");                // Hello There , Mahesh
    console.log(`Hello There, ${name}. How are you?`);  // Output : Hello There, mahesh. How are you?
}

sayWishes("mahesh");
sayWishes("Jesus"); 

console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  ~  ~ ~ ")


function namasthey(){
    return "Hello In India";
}

namasthey(); // Output: Nothing prints bcoz here just calling the method but not mentioned about return value.
var greetings = namasthey();
console.log(greetings);
console.log(namasthey()); // Directly printing on console without using variable.


