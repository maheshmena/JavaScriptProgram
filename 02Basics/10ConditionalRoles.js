// Create an application with the following roles:
// admin - Get full access
// subadmin - Gets access to create/delete courses
// testprep - Gets access to create/delete tests
// user - Get access to consume content

var user = "were";

switch(user){
    case "admin" :
        console.log("You get Full Access");
        break;
    case "subadmin" :
        console.log("You get access to create/delete courses");
        break;
    case "testprep":
        console.log("Gets access to create/delete tests");
        break;
    case "user":
        console.log("Get access to consume content");
        break;
    default:
        console.log("Trial User");
        break; 
}