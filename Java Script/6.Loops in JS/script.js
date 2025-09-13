// for(let i=0;i<10;i++){
//     console.log("Nitin" , i);
// }

//While loop

// let count = 0;
// while(count <= 5){
//     console.log(count);
//     count++;
// }

// Do-While loop

// let count = 0;
// do{
//     console.log(count);
//     count++; 
// }while(count < 5)

// continue and break statement

let count = 0;
while(count < 10){
    count++;
    if(count%2 == 0){
        continue;
    }
    console.log(count); 
}