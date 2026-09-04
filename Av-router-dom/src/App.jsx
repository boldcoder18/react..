import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from "./Pages/Home"
import Notfound from './Pages/Notfound'
import Navbar from './components/Navbar'
import Bottom from './components/bottom'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Contactdetails from './Pages/Contactdetails'
import Navbar2 from './components/Navbar2'


const App = () => {


  return (
    <div className='text-3xl font-bold underline bg-black text-white h-screen w-full'>
      <Navbar />
      <Navbar2 />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<Contactdetails />} />


        <Route path="/product" element={<Product />}>
          <Route path="Men" element={<Men />} />
          <Route path="Women" element={<Women />} />
          <Route path="Kids" element={<Kids />} />
        </Route>


        <Route path="*" element={<Notfound />} />

      </Routes>
      <Bottom />
    </div >
  )
}

export default App
