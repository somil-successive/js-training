
// Write a function expression that takes in another function as an argument


function getName(){
    return "Somil" ;
}

function greetPerson(name){

    return("Welcome "+ name);
}

console.log(greetPerson(getName()));