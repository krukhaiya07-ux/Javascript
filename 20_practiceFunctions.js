//Topic: Building mini calculator using Functions

//Defining Function
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
//Taking the user input
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /):");

//This block is the decision maker
let result;
if(operation == "+"){
    result =add(num1,num2);
}
else if(operation == "-"){
    result =subtract(num1,num2);
}
else if(operation == "/"){
    result =divide(num1,num2);
}
else if(operation == "*"){
    result =multiply(num1,num2);
}
else{
    console.log("invalid operation")
}
console.log("Result is:",result);//Print result