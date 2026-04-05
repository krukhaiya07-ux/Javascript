//Topic: Differences between let and const
//What I learned:Declaring the variables using let and const  

console.log("Javascript:var,let and const")
//var a = 45
//var a = "p"
let b = "Hari";//Global scope
const author="Harry"
let author = 5//Throws an error because constant cannot be changed once declared
let c = null
let d = undefined
{
 let b = 'this'
 console.log(b)//local scope
}
console.log(b)
console.log(author)