import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-gray-800 text-white' >
            <h2>CODING-WED</h2>
            <div className='flex gap-6'>

                <Link to='/' >Home</Link>
                <Link to='/about'>Adout</Link>

                <Link to='/product'>Product</Link>

                <Link to="/contact">Contact</Link>
            </div>
        </div >
    )
}

export default Navbar
