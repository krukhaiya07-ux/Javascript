//For-Loop:Used to execute a block of code multiple times without rewriting it.
//Example:Program to add first natural number using For-loop Control flow structure


let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);

for (let i = 0; i < n; i++) {
    sum += (i + 1);
}
console.log("Sum of first " + n + " natural numbers is " + sum);

