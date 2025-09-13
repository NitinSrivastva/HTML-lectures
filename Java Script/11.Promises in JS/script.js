//Syncronous function using promises 
// const ticket = new Promise(function(resolve,reject){
//     const onBoarded = true;
//     if(onBoarded){
//         resolve("you are eligible to onboarded");
//     }else{
//         reject("you are not eligible to onboarded")
//     }
// })

// ticket.then((data)=>{
//     console.log("Wohooo!" , data);  
// }).catch((data)=>{
//     console.log("ohh no!",data);    
// }).finally(()=>{
//     console.log("This will be executed all time");
// })

//Asyncronous method were call back method is used here we resolve the drawback of call back method using promises

function getCandies(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        const candies = "🍭";
        // console.log("In our getcandies method : ",candies);
        resolve(candies);
    }, 3000);
    })    
}
function handOverKeys(candies){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
        const keys = candies+"🔑";
        // console.log("In our handOverKeys method : ",keys);
        // resolve(keys);
        reject("Key not foound")
        }, 3000);
    })
}
function onbording(keys){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        const onborded = keys+"🏨";
        // console.log("In our onbording method : ",onborded);
        resolve(onborded);
    }, 3000);
    })
}


// method 1 to call 
// getCandies()
//     .then((candies)=>{
//         console.log("Here is the Candy",candies);
//         return handOverKeys(candies);
//     })
//     .then((keys)=>{
//         console.log("Here is your key",keys);
//         return onbording(keys);
//     })
//     .then((onborded)=>{
//         console.log("Welcome to the restaurant",onborded);
//     })
//     .catch((err)=>{
//         console.log("Error occured:-)",err);
//     })
//     .finally(()=>{
//         console.log("Happy to assist you:-)");
//     })

// method 2 to call using async and await

async function onBoardClient(){
    try{
        const candy = await getCandies();
        console.log("Here is the Candy",candy);
        const key = await handOverKeys(candy);
        console.log("Here is the keys",key);
        const onBoard = await onbording(key);
        console.log("Welcome to the resturant",onBoard);
    }
    catch(err){
        console.log("Error Occured" ,err);
    }
    console.log("Happy to Assist you:-)");
    
}

onBoardClient();