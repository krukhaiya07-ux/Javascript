//Problem1:What will be the following print in javascript console.log(Har\".length)

let str= "Har\""
console.log(str.length)

//Problem 2:Write a program to convert a given string to lowercase
let word="fox"
console.log(word.toLowerCase())
console.log(word.toUpperCase())

//Problem 3: Write a program to uppercase just one specific character.
let string = "hello";
let result = string[0].toUpperCase() + string.slice(1);
console.log(result)

//Problem 4: Extract the amount of the string "Please give Rs 1000"
let str2 = "Please give Rs 1000"
let amount= Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

//Problem 5:Try to change 4th charachter of a given string were you able to it?
let friend="Deepika"
friend[3] = "R"
console.log(friend)//friend can't be changed because string is immutable