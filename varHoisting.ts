//Var hoisting. Any variable declared as var goes to the top of the functional block
function greetPerson(name){

    if(name === 'mani'){
        var greet = 'hello mani' 
    }else{
        var greet = 'hi there'
    }
    console.log(greet)    //var is declared inside if statement but accessible anywhere within the function
}

greetPerson('mani')