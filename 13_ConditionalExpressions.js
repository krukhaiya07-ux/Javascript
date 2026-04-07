//Topic:Conditional Expressions

let a=5;
if(a<0){
    console.log("This is an invalid age")
}
else if(a<9){
    console.log("YOU ARE KID AND DONT THIK OF DRIVING!")  
}
else if(a<18 && a>=9){
    console.log("YOU ARE STILL A KID BUT YPU MAY DRIVE AFTER 18")  
}
else {
    console.log("you can now drive")  
}

//Switch Operator
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default://If nothing matches
    console.log("Invalid day");
}