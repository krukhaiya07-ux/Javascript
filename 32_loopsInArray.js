//Topic:Loops used in Array

//To access the elements
let num=[1,2,4,3,5,6,7]
for(let i=0; i<num.length;i++){
    console.log(num[i])
}

//for each loop
let dataset = [1, 2, 4, 3, 5, 6, 7];

dataset.forEach((element) => {
    console.log(element * element);
});

//from
let name="array"
let arr=Array.from(name)
console.log(arr)