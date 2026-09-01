import React from 'react'

const App = () => {
  const btnclick = (e) => {
    e.preventDefault()
    console.log("form submit");
  }

  return (

    <div onSubmit={(e) => {
      btnclick(e)
    }}>
      <form>
        <input type="text" placeholder='enter your name' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
