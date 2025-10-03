import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// function CustomApp() {

//   return (
//     <>
//       <h1>Hello World | vite</h1>
//       <p>Hey! it's a Paragraph demonstration</p>
//     </> 
//   )
// }

// this reactElement is not JSX, it's a simple JS object amd it is custom react element
const reactElement = {
    type: "a",
    props: { 
        href: "https://www.google.com", 
        target: "_blank"  
    },
    content: "Click on me to navigate google page"
}

// AnotherElement is define for internal use of JSX and working of reactElement internally
const AnotherElement = (
    <a href="https://www.google.com" target="_blank">Click on me to navigate google page</a>
)

// myName is called here is evaluated expression
const myName = "Nitin srivastava"

// This syntax is same as reactElement object here no need to define name property
//  and props property because React.createElement will do this work internally
//  and it will return the object like reactElement
const ReactElement = React.createElement('a',{ 
        href: 'https://www.google.com', 
        target: "_blank" 
    }, 'Click on me to navigate google page', myName) 


createRoot(document.getElementById('root')).render(
    // <App /> 
    // <CustomApp />
    // customApp() ye simple function ko call kr rha hai
    // AnotherElement  ye wala method jb use krenge jb hum khud se variable create krege 

    // <ReactElement />
    ReactElement 
)
