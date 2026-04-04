//Topic:Declaring variables using let and var
//What I learned: Differences between let and var
console.log("Javascript:var,let and const")
//var a = 45
//var a = "p"
let b = "Harry";//Global scope
let c = null
let d = undefined
{
 let b = 'this'
 console.log(b)//local scope
}
console.log(b)