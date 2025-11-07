import { useState ,useCallback  ,useEffect ,useRef} from "react"


function App() {

  // this state that the length of the password
  const[length, setLength] = useState(10)
  // this state that the number is allowed or not
  const[isNumberAllowed,setIsNumberAllowed] = useState(false)
  // this state that the special characters is allowed or not
  const[isCharAllowed,setIsCharAllowed] = useState(false)
  // this state that the password
  const[password,setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null)


  // Now for optimization we will use useCallback hook
  // call back synytax :- const functionName = useCallback(() => {}, [dependencies])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(isNumberAllowed){
      str += "0123456789"
    }
    if(isCharAllowed){
      str += "!@#$%^&*()_+"
    }

    for (let i = 1; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }
    
    setPassword(pass)
    
  } , [length, isNumberAllowed , isCharAllowed])

  const copyPasswordToOurClipboard = useCallback(() => {
    passwordRef.current.select()
    // if i want to select not all the text then i want to select only the part of the text then i will use setSelectionRange method
    passwordRef.current.setSelectionRange(0, 25) 
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator() 
  }, [length,isNumberAllowed,isCharAllowed,passwordGenerator])


  return (
   <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-xl my-8 text-orange-500 bg-gray-500  px-4 py-3">
       <h1 className="text-xl text-center text-white my-3">Password Generator</h1>
      <div className="flex rounded-xl shadow-md overflow-hidden mb-4">
        <input type="text" value={password} className="outline-none w-full py-1 px-3 "  readOnly placeholder="Enter Password here..."
         style={{backgroundColor:"white"}} ref={passwordRef} />

         <button onClick={copyPasswordToOurClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">

          <input type="range" min={10} max={80} value={length} className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}/>
          <label htmlFor="">label:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          name="" 
          id="numInput" 
          defaultChecked={isNumberAllowed}
          // onChange={()=>{setIsNumberAllowed(true)}}
          onChange={()=>{setIsNumberAllowed((prev) => !prev)}}
          />
          <label htmlFor="numInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          name="" 
          id="charInput" 
          defaultChecked={isCharAllowed}
          // onChange={()=>{setIsNumberAllowed(true)}}
          onChange={()=>{setIsCharAllowed((prev) => !prev)}}
          />
          <label htmlFor="charInput">Characters</label>
        </div>

      </div>
    </div>
   </>
  )
}

export default App
