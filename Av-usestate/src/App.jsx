import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({ user: "suraj", age: 18 })
  const [arr, setArr] = useState([10, 20, 30])
  const [val, setVal] = useState(0)


  const arrbtn = () => {
    let newArr = [...arr]
    newArr.push(40);
    setArr(newArr)
  }

  const btnclick = () => {
    setVal(prev => (prev + 1))
    setVal(prev => (prev + 1))
    setVal(prev => (prev + 1))

    // setVal(val + 1)
    // setVal(val + 1)
    // setVal(val + 1)

  }






  const btn = () => {
    let newnum = { ...num };
    console.log(newnum);
    newnum.user = "Ravi";
    newnum.age = 20;
    setNum(newnum);


  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btn}>click me</button>


      <h1>{arr}</h1>
      <button onClick={arrbtn}>click me</button>


      <h1>{val}</h1>
      <button onClick={btnclick}>click</button>

    </div>
  )
}

export default App
