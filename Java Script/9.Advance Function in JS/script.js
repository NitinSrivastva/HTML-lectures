//Named function
function greet(){
    console.log("Hey! Everyone");
}
greet();

//Anonymous function
let greet1 = function(){
    console.log("Hey! everyone");
}
greet1();

//Arrow function
let greet2 = () =>{
    console.log("Hey! everyone");
}
greet2();

// const square = (num) =>{
//     return num*num;
// }


// The beauty of arrow function is to write this square function in a single line 

const square = (num) => num*num
console.log(square(4));

//Now we discuss about call back function
const calculator = (a , b , operation) =>{
    return operation(a,b);
}
//method 1 (using Anonymous function)
// console.log(calculator(2,3,function(n1 , n2){ return n1+n2}));

// method 2 using Anonymous function)
const sum = calculator(2 , 3 , function(n1 , n2){return n1+n2});
console.log("Summation",sum);

const sub = calculator(2 , 3 , function(n1 , n2){return n1-n2});
console.log("Substraction",sub);

//method 3 (using arrow function)
const mul = (a , b) => a*b;
const multiple = calculator(3 , 3 , mul);
console.log("Multiplication",multiple);
// const multiple = calculator(2 , 3 , function(n1 , n2){return n1*n2});
// console.log(multiple);

//method 4 (using named function)
function divide(a , b){
    return a/b;
}
const division = calculator(50 , 15 , divide);
console.log("Division",division);


//Array call back function

const arr = [2,5,6,8,9,0,-3,-5,-2];
//method 1
const printFirstNegativeNumber = (num) => num<0;

//method 2
// const printFirstNegativeNumber = (num) => {
//     return num<0;
// }

//method 3
// const printFirstNegativeNumber = (num) => {
//     if(num < 0){
//         return num;
//     }
// }

//Print that first negative number using method 1
const result = arr.find(printFirstNegativeNumber);
console.log("First negative number : ",result);

//Print that first negative number using method 1
const result1 = arr.findIndex(printFirstNegativeNumber);
console.log("First negative number index : ",result1);


//For each method in java script

arr.forEach((num , index) =>{
    console.log("Element :",num , "Index : ",index);
    
})
