"use strict";
var firstname = 'glenn';
var lastname = 'maxwell';
var person1 = {
    firstname: firstname,
    lastname: lastname
};
//Short hand notation if property name and assignment variable name are same
var person2 = {
    firstname: firstname,
    lastname: lastname
};
console.log(person2.firstname, person2.lastname);
function createPerson(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
console.log(createPerson('shane', 'watson', 38));
