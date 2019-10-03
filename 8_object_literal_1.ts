let firstname = 'glenn'
let lastname = 'maxwell'

let person1 = {
    firstname: firstname,
    lastname: lastname
}

//Short hand notation if property name and assignment variable name are same
let person2 = {
    firstname,
    lastname
}

console.log(person2.firstname, person2.lastname)

function createPerson(firstname, lastname, age){
    let fullname = firstname + " "+ lastname
    return {
        firstname,
        lastname,
        fullname,
        isSenior(){ //Function inside object literal can also be written like this
            return age > 60
        }
    }
}

console.log(createPerson('shane', 'watson', 38))