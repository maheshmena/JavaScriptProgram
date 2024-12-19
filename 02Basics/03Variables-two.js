const uid = "abc123";
// uid = "abcd234"; Cannot assign to Const Variable : TypeError 

var firstName = "Mahesh";
var lastName = "Mena";
var email = "mena.mahesh@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var country = "India";
var state = "Telangana";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = true;

//fullName = prompt("Enter You Name:")   // In this approach we need to attach this file to Webpage

console.log("First Name is : " +firstName);
console.log("Last Name is : " +lastName);
console.log("Email Address is : " , email);   // + and , both works fine

// Interpolation terminalogy
console.log(`    
    With unique Id : ${uid}
    User First Name : ${firstName} 
    User Last Name : ${lastName} 
    and his Email is : ${email}
    and uses password : ${password}
    With Registered Country : ${country}
    and from State : ${state}
`)  
console.log("The User Course Count is : "+ courseCount);
console.log("Is User Logged In from Google : " + isLoggedInFromGoogle);
console.log("Is User Logged In from Facebook : " + isLoggedInFromFacebook);