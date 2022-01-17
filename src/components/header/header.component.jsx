import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'

const Header = () => (
    <div className='header'>
        {/* <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link> */}
        <div>HEADER</div>
        <div className='options'>
            <Link className='option' to='/'> HOME </Link>
            <Link className='option' to='/blog'> BLOG </Link>
            <Link className='option' to='/about'> ABOUT </Link>
            <Link className='option' to='/contact'> CONTACT </Link>
        </div>
    </div>
)

export default Header