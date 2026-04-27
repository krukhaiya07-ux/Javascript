//PractiseSet(06)
//Q1:Create an array of numbers and take input from the user top add the numbers to the array
let arr=[34,21,9,70,27,33]
let a=prompt("Enter a number")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)

//Q2:Use reduce to calculate factorial of a given numbers of array of first n natural number.
let arr2=[23,13,10,21,56,78,90]
let n=arr2.map((x)=>{
    return x*x
})
console.log(n)

//Find the largest number
let arr3 = [3, 7, 2, 9, 4];
function largest(a, b) {
    return a > b ? a : b;
}

let max = arr3[0];

for (let i = 1; i < arr3.length; i++) {
    max = largest(max, arr[i]);
}

console.log(max);