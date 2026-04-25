//Topic: Some more array methods in Javascript

//concatenation method
let num=[1,2,3,4,5,6,7,8]
let num_more=[11,12,13,14,15,16,17,18]
let num_even_more=[212,213,214,215,216,217,218]

let newArray=num.concat(num_more,num_even_more)
console.log(newArray)

//sort Method
let data=[23,67,11,2,0,56,75]
data.sort()
console.log(data)

//Splice Method
let mydata=[2,5,45,67,21,7,8,9]
mydata.splice(2,3,1021,1023,1024,1025)
console.log(mydata)

//slice method
let num2=[551,22,3,14,5,7,8,229]
let newNum = num2.slice(3,5)
console.log(newNum)