//Function that adds two numbers

function add(a, b){
    return a + b;
}

//function that subtracts two numbers

function subtract(a, b){
    return a - b;
}

//Function that multiplies two numbers

function multiply(a, b){
    return a * b;
}

//Function that divides two numbers

function divide(a, b){
    return a / b;
}


// Created three variables that hold the 3 parts of
// a math equation

let firstNum;
let operator;
let secondNum;

// Function that accepts an operator on top of
// the first number and second number so it will
// know which of the above functions to call

function operate(firstNum, operator, secondNum){
    if(operator === "+") 
        return add(firstNum, secondNum);
    else if(operator === "-") 
        return subtract(firstNum, secondNum);
    else if(operator === "*")
        return multiply(firstNum, secondNum);
    else
        return divide(firstNum, secondNum);
}

console.log(operate(5, "*", 5));