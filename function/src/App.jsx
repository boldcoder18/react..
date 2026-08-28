import React from 'react'

// function inputchange(val) {
//   console.log(val)
// }
function speed(elem) {
  if (elem > 0) {
    console.log("seeda scroling....", elem);
  }
  else {
    console.log("ulta scroling....", elem);
  }
}
const App = () => {
  return (
    <div>
      {/* <input onChange={function (elem) {
        inputchange(elem.target.value)
      }} className='input' type='text' placeholder='type here' />

      <div className='box' onMouseMove={(elem) => {
        console.log(elem.clientY);
      }}></div> */}


      <div onWheel={(elem) => {
        speed(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>


    </div>
  )
}

export default App
