//Function definition (Named function)
// function summation(a , b){
//     const result = a + b;
//     console.log("Result :",result);
//     return result;
// }
//function calling
// summation(45 , 55);
//another method to call for return result
// console.log(summation(55,45));


// const x = 45;
// const y = 45;
// console.log(summation(x , y));


// const l = 56;
// const j = 58;
// console.log(summation(l , j));


// function greet(){
//     console.log("hey! welcome to my application :-)");
// }
// greet();

// function greet(userName){
//     console.log("hey! welcome to my application :-)",userName);
// }
// greet("Nitin srivastva");


//Anonymous function/Expression function

// let sum = function(a,b){
//     const result = a + b;
//     return result;
// }
// console.log("result :",sum(46,89));

// const x = 45;
// const y = 45;
// console.log("result :",sum(x , y));


// const l = 56;
// const j = 58;
// console.log("result :",sum(l , j));


//Nested Function 
function addSquare(x , y){

    const a = square(x);
    const b = square(y);
    
    function square(num){
        return num*num;
    }
    return a+b;
}
console.log(addSquare(3,2));
