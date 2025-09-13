//Events
// 1.EventHandler (onclick , onload , onmouseover , onkeypress , onkeydown , onkeyup)

function onclickfun(){
    console.log("The box has been clicked");
    
}

const keyPressEvent = ()=>{
    console.log("The key has been hitted");
}

const onKeyUp = ()=>{
    console.log("on Key Up");
}

const onKeyDown = ()=>{
    console.log("on Key Down");
}

//2. Event listener
// Bubbling concept 
// const box1 = document.getElementById("box-1");
// box1.addEventListener("click" , (event)=>{
//     console.log("Box"); 
// })

// const cont = document.getElementById("cont");
// box1.addEventListener("click" , (event)=>{
//     console.log("container"); 
// } , false)


// capture concept
const box1 = document.getElementById("box-1");
box1.addEventListener("click" , (event)=>{
    console.log("Box"); 
})

const cont = document.getElementById("cont");
box1.addEventListener("click" , (event)=>{
    console.log("container"); 
} , true)

// box1.addEventListener("click" , ()=>{
//     console.log("Click has been triggered-2"); 
// })
