//Q1:Write a program to print the marks of students in an object using a for loop.

let marks = { 
    Harry: 90,
    Simran: 3,
    Rukhaiya: 8,
    Monika: 4,
};

for (let i = 0; i < Object.keys(marks).length; i++) {

    //console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

//Problem 2:
for(let key in marks){
    console.log("The marks of"  + key +  "are"   marks[key] )
}

//Problem 3: 
let cn = 43,
let j
while(j != cn){
    j=prompt("Enter the correct number")
}
console.log(" you entered the right number")
