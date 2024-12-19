// User is only allowed to make a purchase when he is :
// Logged In
// Email Verified
// Card Info is valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;
/*
if(isLoggedIn)
{
   console.log("Logged IN Success");
   if(isEmailVerified)
    {
        console.log("Email is Verified");
        if(cardInfo)
        {
            console.log("You can make a purchase");
        }
    }
} 
*/

if(isLoggedIn && isEmailVerified && cardInfo)
{
   console.log("Allow User to make the purchase.")
}
else{
    console.log("Oops! Please check your details.")
}