//Looping through Arrays

//map():Creates new Array by performing some operation on each array element
let arr=[45,23,21]
let a=arr.map((value,index,array )=>{
    console.log(value,index,array)
    return value+1
})
console.log(a)

//Array filter method
let arr2=[45,23,21,0,3,5]
let a2=arr2.filter((a)=>{
    return a<10
})
console.log(a2)

//Array reduce method
let arr3=[2,3,4,2,1,6]
let newArray=arr3.reduce((h1,h2)=>{
    return h1+h2

})
console.log(newArray)