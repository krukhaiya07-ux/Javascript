//Topic:Various String Methods in Javascript

let name= "Harry"
console.log(name.length)//Prints the length of the given string
console.log(name.toUpperCase())//Prints the given string and turns them into uppercase
console.log(name.toLowerCase())//Prints the given string and turns them into Lowercase
console.log(name.slice(2,4))//Prints the given string upto 4th index starting from 2nd and including the 2nd
console.log(name.replace("Har","Per"))//replace the string content 

let name2="  Nisa "
console.log(name2.trim())//Removes whitespace from both ends of a string

let friend= "Simran"
console.log(name.concat("is a good friend of ",friend, "ok"))//used to append one string to another and returns
// a new combined string. It does not modify the original string since strings are immutable.



