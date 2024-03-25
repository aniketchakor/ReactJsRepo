import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)

  
  const increment = () => {
    console.log("value added", Math.random);
    if(counter < 10){
      setCounter(counter + 1)
    }
  }
  const decrement = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
   
  }

  return (
    <>
      <h1>Counter value : {counter}</h1>

      <button onClick={increment}>Add</button> 
      <br />
      <button onClick={decrement}>Subtract</button>
    </>
  )
}

export default App
