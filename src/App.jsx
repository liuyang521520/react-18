import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTransition } from 'react';
console.log(1);
function App() {
  const isConcurrent = React.isConcurrentModeAPI;
  const [isPending, startTransition] = useTransition()

  const [numbers, setNumbers] = React.useState(new Array(100000).fill('A'));
  const divRef = React.useRef();
  React.useEffect(() => {
    // startTransition(() => {
      setTimeout(() => {
        divRef.current.click();
      }, 1000);
      setNumbers(numbers => numbers.map(item => item + 'B'))
    // })
  }, []);
  return <div>
    <input />
    <div ref={divRef} onClick={() => {
    setNumbers(numbers => numbers.map(item => item + 'C'))
  }}>{numbers.map((number, index) => <div key={index}>{number}</div>)}</div>
  </div>
  
   
  
}
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

export default App
