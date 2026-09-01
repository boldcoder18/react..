import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)


  function Achange() {
    console.log('A changed')
  }

  function Bchange() {
    console.log('B changed')
  }

  useEffect(() => {
    Achange()
  }, [a])


  useEffect(() => {
    Bchange()
  }, [b])

  return (
    <div>


      <h2 >Value of A is : {a}</h2>
      <h2>Value of B is : {b}</h2>

      <button onClick={() => setA(a + 1)}>Increment A</button>
      <button onClick={() => setB(b + 1)}>Increment B</button>
    </div>
  )
}

export default App
