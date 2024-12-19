
//TODO: Falsy Values (OR) Coercion
// undefined
// null
// 0
// ''
// NaN

var user;
console.log(user);  // Output : undefined

var user = null;
if(user)
{
    console.log("Condition is true");  // Ouput : No Result on Console
}

var course = "null";
if(course)
{
    console.log("Condition is true");   // Output : Condition is true
}

var course = "";
if(course)
{
    console.log("Condition is true");   // Output :  No Result on Console
}

console.log("2" + 2); // 22
console.log(2 + "2"); // 22
console.log(typeof ("2"+ 2));  // string - While concatinating the string with other data type, Javascript
console.log("2" + "2"); // 22     assumes that other data type also string type only.

var count = "2";
if(2 == count)
{
    console.log("Condition is true");   // Ouput : Condition is true
}

var count = "2";
if(2 === count)
{
    console.log("Condition is true");   // Output :  No Result on Console
}