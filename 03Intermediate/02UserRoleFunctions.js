/* 
Define a function that can answer the role of the user. 
A User can be on following roles:
admin - With full access
subadmin - With access to create/delete courses
testprep - With access to create/delete tests
user - consume all content
other - Trial User

Input : getUserRole(name, role)
*/

function getUserRole(name, role)
{
    switch (role) {
        case "admin" :
            return `${name} is admin with all access `;
            break; //  This is not necessary because after return NOTHING executes.
        case "subadmin" :
            return `${name} is subadmin with access to create/delete courses`;
            break;
        case "testprep" :
            return `${name} is testprep with access to create/delete tests`;
            break;
        case "user" :
            return `${name} is user with access to consume all content`;
            break;
        default :
            return `${name} is a trial user`;
            break;
    }
}

getUserRole("Mahesh", "user"); //  Nothing Prints bcoz we're not mentioned what to do with returned value
console.log(getUserRole("Mahesh", "subadmin"));

var getRole = getUserRole("Paul", "avgd");
console.log(getRole);
