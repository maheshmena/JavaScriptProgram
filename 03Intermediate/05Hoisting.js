// There are 2 types of Contexts in JavaScript
// 1. Global Context and 2. Executing right now context.

// Execution context comprises : a. Variable Object  b. Scope Chain  c. this
// 2 Rules we need to remember while considering the EXECUTION CONTEXT 
// Function declarations are scanned and made available.
// Variable declarations are scanned and made UNDEFINED.

var number = 2 ; // Here global context running in to COLLECT information.

function sayMe()
{
    console.log("Say Me");  // Here the Global Context running in while typing the text.
}
sayMe();  // Here running executing right now context

function tipping(a)
{
    var bill = a;
    console.log(bill + 5);  // 10 - number
}
tipping(5);

function tipper(a){
    var billAmount = a;
    var totalBill = billAmount + 5;
    console.log(typeof totalBill) ; // string
    console.log(billAmount + 5); // 55 -  Here Javascript treating the other variable as string type.
}
tipper("5");  // 55

function myTip(a){
    var billAmount = parseInt(a);
    console.log(billAmount + 5);
}
myTip("5"); // 10 - converting string number to actual number type.

function myTip(a){
    var billAmount = parseInt(a);
    console.log(billAmount + 5);
}
myTip("a"); // Output : NaN - parseInt method can't convert to Int type due to input is char type.

myHoistingTip("80"); // Output : 85  Because of hoising concept it printed value
function myHoistingTip(x)
{
   var bill = parseInt(x);
   console.log(bill + 5);
}

//myHoistingNoDeclare(30);  // myHoistingNoDeclare is not defined
/*
function myHoistingNoDeclare(a){
    var myBill = parseInt(a);
    console.log(myBill+ 10 );
} */

bigTipper("200");
function bigTipper(x)
{
    var myBill = parseInt(x);
    console.log(myBill + 15);
}    

/*
bigTipping("200");  // bigTipping is not a function - This is Function Expression Type
var bigTipping = function (x)  // function declared inside a varible so its not available.
{
    var myBill = parseInt(x);
    console.log(myBill + 20);
}
*/
var myFullName = "Mahesh Mena";
console.log(myFullName);

console.log(myFirstName);  // Output : undefined
var myFirstName = "Mahesh";

console.log(myLastName);  // Output : myLastName is not defined
 var myLastName = "Mena";

function sayMyName()
{
    var myLastName = "MR.M";
    console.log(myLastName);
}
sayMyName();

console.log(myLastName); // Output : Mena - This is printed from variable declared at line-80