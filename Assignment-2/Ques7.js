

// ARROW FUNCTIONS:

// Write a function expression that takes in a number and returns its square.

const getSquare=(number)=> number*number;


// Write a function expression that takes in two numbers and returns their sum.

const getSum=(first,second)=> first+second;


// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const  checkEven=(num)=>{
    if(num%2==0){
        return true;
    }else{
        return false;
    }

}

console.log(getSquare(5));
console.log(getSum(5,2));
console.log(checkEven(6));