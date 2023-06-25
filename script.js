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

let firstNum = 0;
let operator;
let secondNum = 0;

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

let digits = Array.from(document.querySelectorAll(".container .buttons .digit"));
let displayValue = document.querySelector(".display");

let operators = Array.from(document.querySelectorAll(".container .buttons .operator"));
let equals = document.querySelector(".equals");
let clearButton = document.querySelector(".clear");

// Add event listener to digits

digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if(operator !== undefined){
            secondNum *= 10;
            secondNum += +digit.textContent
            displayValue.textContent = secondNum;
            console.log(secondNum);
        }
        else{
        firstNum *= 10;
        firstNum += +digit.textContent;
        displayValue.textContent = firstNum;
        console.log(firstNum);
        }
    })
});

// Add event listener to operators;

operators.forEach(op => {
    op.addEventListener("click", () => {
        if(firstNum !== 0 && secondNum !== 0){
            displayValue.textContent = operate(firstNum, operator, secondNum);
            firstNum = +displayValue.textContent;
            secondNum = 0;
            operator = op.textContent;
        }else{
            operator = op.textContent;
            console.log(operator);
        }
    })
});

// Add event listener to equals sign

equals.addEventListener("click", () => {
    if(firstNum !== 0 && secondNum !== 0){
        displayValue.textContent = operate(firstNum, operator, secondNum);
        operator = undefined;
        firstNum = +displayValue.textContent;
        secondNum = 0;
    }
})

clearButton.addEventListener("click", () => {
    displayValue.textContent = "";
    operator = undefined;
    firstNum = 0;
    secondNum = 0;
})