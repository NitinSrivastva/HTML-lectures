import { useState } from 'react'
import './App.css'

function App() {
  
  // Now we declare the hook here

  // Here useState is a function which returns an array of two values
  // The first value is the current state (counter)
  // The second value is a function that allows us to update the state (setCounter)
  // We can give any name to these two values but it is a convention to name them like this
  let[counter , setCounter] = useState(100);
  
  // let counter = 10;

  const addValue = () => {
    // console.log("Incremented by 1");
    // counter++;
    // counter = counter + 1;
    // counter += 1;

    setCounter(counter + 1);
    // Here setCounter is a function which takes the new value of counter as an argument
    // and updates the state with that value
    // console.log("Counter value is: ", counter);
    
  }

  const SubstractValue = () => {
    // console.log("Decremented by 1");

    setCounter(counter - 1);
    // console.log("Counter value is: ", counter);
  }

  const MultiplyValue = () =>{
    setCounter(counter * 2);
  }

  const DivideValue = () =>{
    setCounter(counter / 2);
  }
  return (
    <>
      <h1>Hey everyone we are here to understand about Hooks in React JS</h1>
      <h3>Counter: {counter}</h3>

      <button onClick={addValue}>Increment by 1</button>
      <button onClick={SubstractValue}>Decrement by 1</button>
      <button onClick={MultiplyValue}>Multiply by 2</button>
      <button onClick={DivideValue}>Divide by 2</button>
    </>
  )
}

export default App
