import React, { useState } from 'react'



const App = () => {

  let [num, setNum] = useState(0)

  function increment() {
    setNum(num + 1)
  }

  function decrement() {
    setNum(num - 1)
  }

   function increment5() {
    setNum(num + 5)
  }

  function decrement5() {
    setNum(num - 5)
  }

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button><br/>
       <button onClick={decrement5}>decrement by 5</button>
      <button onClick={increment5}>increment by 5</button>
    </div>
  )
}

export default App
