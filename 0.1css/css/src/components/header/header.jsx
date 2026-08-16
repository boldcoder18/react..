import React from 'react'
import style from './header.module.css'
const Header = () => {
    return (
        <div className={style.header}>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, exercitationem?</h2>
            <button className={style.btn}>click</button>
        </div>
    )
}

export default Header