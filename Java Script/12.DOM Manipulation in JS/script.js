//we want to chnge the background color with js

// const bodyBackground = document.body
// bodyBackground.style.backgroundColor = "grey"

// we want to access 1 box from all the 4 boxes by using getElementById
// const box4 = document.getElementById("box-4")
// console.log(box4);

//we want to access element by using getElementByTagName
// const div = document.getElementsByTagName("div")
// console.log(div);

//We want to access all boxes by using getElementByClassName

// const boxes = document.getElementsByClassName("box")
// console.log(boxes);

//Modifying HTML Elements
// 1. InnerHTMl
// 2. InnerText 

// const box1 = document.getElementById("box-1");
// box1.innerHTML = "Nitin"
// box1.innerText = "Nitin"

// document.getElementById("box-1").innerHTML="Nitin"


// const box1 = document.getElementById("box-1");
// box1.style.backgroundColor="yellow "


// We can add  attributes from HTMl using JS
// const box2 = document.getElementById("box-2");
// box2.classList.add("circle")
// We can remove  attributes from HTMl using JS
// const box3 = document.getElementById("box-3");
// box3.classList.remove("circle")


// const boxes = document.getElementsByClassName("box")

// for(let i=0;i<boxes.length;i++){
//     boxes[i].classList.add("circle")
// }

// const box3 = document.getElementById("box-3");
// box3.classList.remove("box")

// Creating a new element

// 1st is get to the access
// 2nd is the content
// 3rd is appending

const newPara = document.createElement('p');
newPara.innerText="This is our new paragraph";

const contain = document.getElementById('contain')
contain.appendChild(newPara)

newPara.classList.add("box")
newPara.classList.add("circle")