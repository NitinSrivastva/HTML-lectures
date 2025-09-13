// console.log("One");
// console.log("Two");
// console.log("Three");

// setTimeout(function (){
//     console.log("This will be executed after 3 seconds!");
// } , 3000)

function getCandies(callback1){
    setTimeout(() => {
        const candies = "🍭";
        console.log("In our getcandies method : ",candies);
        // return candies;
        callback1(candies);
    }, 3000);
}
// console.log(getCandies());

function handOverKeys(candies,callback2){
    setTimeout(() => {
        const keys = candies+"🔑";
        console.log("In our handOverKeys method : ",keys);
        callback2(keys);
    }, 3000);
}

function onbording(keys,callback3){
    setTimeout(() => {
        const onborded = keys+"🏨";
        console.log("In our onbording method : ",onborded);
        callback3(onborded);
    }, 3000);
}
getCandies((candies) =>{
    handOverKeys(candies,(keys) =>{
    // console.log("Here is your keys & candies : ",keys);
        onbording(keys,(onborded) =>{
            console.log("Here is your keys , candies & onbprded: ",onborded);
        })
    })
})

