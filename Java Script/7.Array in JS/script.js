// let arrName = [12,13,1,4,15,16 , "String" , true]
// console.log(arrName);
// console.log(arrName[2]);

// if we provide index out of bound then result will shown undefined
// console.log(arrName[7]);

//We can store function as well as object in the array
let varName = ["abc" , "xyz" , 122 , 45 , function dummy(){console.log("Dummy function");
} , {name : "Nitin srivastva" , age : 25}]

// console.log(varName[5]);
console.log(varName.length);

varName[1] = "Nitin";
console.log(varName);

let newArray = varName;
console.log("newArray",newArray);
// newArray[0] = "Student";
// console.log("updated newArray",newArray);
// console.log("previous varName",newArray);
console.log("Index of this element : ",newArray.indexOf(45));
console.log("This array element is present or not : ",newArray.includes(456));
console.log("newArray",newArray);
//we want to insert some new element to the newArray we'll use push() 

newArray.push("Laptop");
console.log("insert at the end ",newArray);

newArray.unshift("mobile")
console.log("Insert at start ",newArray);

//Delete from the last element from the array using pop()
newArray.pop();
console.log("Delete element from last : ",newArray);

//Delete from the start of the array using shift()
newArray.shift();
console.log("Delete from the start of the array : " , newArray );

let marks = [98,25,35,44,89,55,46,88,36];
console.log("Unsorted marks : ",marks);

marks.sort();
console.log("Sorted now : ",marks);

//Slice the array elements
let subMarks = marks.slice(2 , 6);
console.log("After slicing : ",subMarks);

