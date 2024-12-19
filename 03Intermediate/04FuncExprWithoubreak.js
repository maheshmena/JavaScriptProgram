/* 2.Function Expression : In this case, the function is defined inside a variable, 
// and the function’s value (its returned value) is stored in that variable.  */

// 3. Arrow Functions : They are were introduced in ES6. 
// Instead of using the function keyword, you use an arrow (=>).

/* 
Define a function that can answer the role of the user with Function Expression syntax
having Switch case without break keyword. 

A User can be on following roles:
admin - With full access
subadmin - With access to create/delete courses
testprep - With access to create/delete tests
user - consume all content
other - Trial User

Input : getUserRole(name, role)
*/

var getUserRole = function (name, role)
{
    switch (role) {
        case "admin" :
            return `${name} is admin with all access`;
        case "subadmin" :
            return `${name} is subadmin with access to create/delete courses`;
        case "testprep" :
            return `${name} is testprep with access to create/delete tests`;
        case "user" :
            return `${name} is user with access to consume all content`;
        default:
            return `${name} is a trial user`;
    }
}

getUserRole("Mahesh", "user"); //  Nothing Prints bcoz we're not mentioned what to do with returned value
console.log(getUserRole("Paul", "admin"));

var getRole = getUserRole("Vidya", "user");
console.log(getRole);

