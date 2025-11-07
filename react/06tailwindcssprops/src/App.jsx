import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  // const [count, setCount] = useState(0)

  let myArr = [1,2,3,4,5]
  let myObject = {name: "NR", 
     company: "xyz"
  }
  return (
    <>
      <Card username = "Nitin" companyName="xyz" age={22} myArray={myArr} myObj={myObject}/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
