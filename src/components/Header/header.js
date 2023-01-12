import React from 'react'
import { Link } from 'react-router-dom'


import './header.css'
const Header = () => {
    return (
        <>
        
        <header className='header'>
            <div>
                <h1>
                    <Link to='/' className='logo'> SearchJobs</Link>
                </h1>
            </div>

            <div className='nav'>
                <ul> 
                    <li>
                        <Link to='/'></Link>
                    </li>
                    <li>
                        <Link to='/Home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/It jobs'>It jobs</Link>
                    </li>
                    <li>
                        <Link to='/Core jobs'>Core jobs</Link>
                    </li>
                    <li>
                        <Link to='/Marketing'>Marketing</Link>
                    </li>
                    <li>
                        <Link to='/sales'>Sales</Link>
                    </li>
                </ul>
            </div>
            <div>
                <li>
                    <Link to='/sign-in' className='cart'>
                        <i class="fa fa-sign-in" aria-hidden="true"> Sign-in</i>
                    </Link>
                </li>
            </div>

        </header>
        </>
    )
}
export default Header;