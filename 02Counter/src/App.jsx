import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
let [Counter , setCounter] = useState(15);
  // let Counter = 10;
  // addValue() function 
  const addValue = ()=>{
    // Counter = Counter + 1;
    setCounter(Counter+1);
    if(Counter >=20){
      alert('No more Value could be added')
    setCounter(0);
    }
  }
  // removeValue() function
  const removeValue = ()=>{
    setCounter(Counter-1);
    if(Counter<=0){
      alert('No more Value could be removed');
      setCounter(0);
    }
  }
  // clearValue() function
  const clearValue = () =>{
    setCounter(0);
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value : {Counter}</h2>

    <button
    onClick={addValue}
    >Add Value</button>
    <br />  
    <button
    onClick={removeValue}
    >Remove Value</button>  
  <br />
  <button
  onClick={clearValue}
  >Clear Value</button>
    </>
  
  )
}

export default App

 