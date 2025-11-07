import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h4 className='text-3xl bg-yellow-600'>React Router</h4>
      <Header/>
    </>
  )
}

export default App
