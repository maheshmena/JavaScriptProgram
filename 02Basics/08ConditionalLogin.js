// Allow user to access the course if he is :
//Logged in from email
// Logged in from Google
// Logged in from Facebook

var email = true;
var google = true;
var facebook = false;
/*
if(email){
    console.log("Allow user to access the Course - Email");
}
else if(google){
    console.log("Allow user to access the Course - Google");
}
else{
    console.log("Allow user to access the Course - Facebook");
}
 */

if(email || google || facebook ){
    console.log("Login Success");
}