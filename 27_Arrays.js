//Topic: Working of Arrays

let marks_class_12=[93, 45, 89, 60, false, "Not Present"]
//console.log(marks_class_12)
//console.log(marks_class_12[0])
//console.log(marks_class_12[1])
//console.log(marks_class_12[2])
//console.log(marks_class_12[3])
//console.log(marks_class_12[4])
//console.log(marks_class_12[5])
//console.log(marks_class_12[6])//Will be indefined because index 6 does not exist

for (let i = 0; i < marks_class1_12.length; i++){
    console.log(marks_class1_12[i]);
}
console.log("the length marks_Class_12", marks_class_12.length)

marks_class_12[6] = 89//Adding a new value to the Array
marks_class_12[0] = 91//Changing the value of an Array
console.log(marks_class_12)

