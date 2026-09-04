import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()
    const loction = useLocation
    return (
        <div>

            <button
                onClick={() => {
                    navigate('/')
                }}
                className='bg-amber-500 py-2 px-5 m-4 rounded cursor-pointer active:scale-95  '>
                home
            </button>

            <button
                onClick={() => {
                    if (loction !== '/') {
                        navigate(-1)
                    }

                }}
                className='bg-amber-500 py-2 px-5 m-4 rounded cursor-pointer active:scale-95  '>
                return back
            </button>

            <button

                onClick={() => {

                    navigate(+1)

                }}

                className='bg-amber-500 py-2 px-5 m-4 rounded cursor-pointer active:scale-95  '>
                Next
            </button>

        </div>
    )
}

export default Navbar2
