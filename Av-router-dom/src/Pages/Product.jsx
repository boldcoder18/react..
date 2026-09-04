import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
    return (
        <div>
            <div className='flex gap-4 justify-center'>
                <Link to='/product/Men'>men</Link>
                <Link to='/product/Women'>women</Link>
                 <Link to='/product/Kids'>Kids</Link>
            </div>

            <Outlet />

        </div>
    )
}

export default Product
