let a=prompt("Whats your age?");
a =Number.parseInt(a);
if(a<0){
    alert("This is an invalid age")
}
else if(a<9){
    alert("YOU ARE KID AND DONT THIK OF DRIVING!")  
}
else if(a<18 && a>=9){
    alert("YOU ARE STILL A KID BUT YPU MAY DRIVE AFTER 18")  
}
else {
    alert("you can now drive")  
}