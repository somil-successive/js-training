
// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

function checkEven(number){
    if(number%2==0){
        return true;
    }else{
        return false;
    }
}

console.log(checkEven(5));
console.log(checkEven(8));