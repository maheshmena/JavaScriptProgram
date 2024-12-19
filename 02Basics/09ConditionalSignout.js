// Show user a signout button if he is authenticated
// Otherwise show him option to SignIn/Signup

var authenticated = true;
/*
if(authenticated){
    console.log("Show Signout button");
}
else{
    console.log("Show SignIn button");
} */

authenticated ? console.log("Show Signout button") : console.log("Show SignIn button") ; 