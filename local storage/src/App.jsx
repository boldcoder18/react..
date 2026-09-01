import React from 'react'

const App = () => {


  const arr = {
    username: 'suraj',
    age: 22,
    class: '10th'
  }
  localStorage.setItem('arr', JSON.stringify(arr))
  const getarr = JSON.parse(localStorage.getItem('arr'))
  console.log(getarr)

  return (
    <div>

      app

    </div>
  )
}

export default App
