
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className='navbar  navbar-dark navbar-expand-md fixed-top' style={{backgroundColor:"#00000082"}}>
                <div className='container-fluid'>
                    <a href="">
                        <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" className='weblogo' />
                    </a>

                    <div className=''>
                        <ul className='navbar-nav'>
                            <li className='mx-2'><Link to="" className='nav-link text-white'>Home</Link></li>
                            <li className='mx-2'><Link to="/about" className='nav-link text-white'>ABOUT</Link></li>
                            <li className='mx-2'><Link to="/brand" className='nav-link text-white'>BRAND</Link></li>
                            <li className='mx-2'><Link to="" className='nav-link text-white'>OUR TAEM</Link></li>
                            <li className='mx-2'><Link to="" className='nav-link text-white'>PRESS RELEASE</Link></li>
                            <li className='mx-2'><Link to="" className='nav-link text-white'>CONTACT</Link></li>
                            <li className='mx-2'><Link to="" className='nav-link text-white'>CARRERS</Link></li>
                            <li className='mx-2'><Link to="" className='nav-link text-white' >FRANCHIES</Link></li>

                        </ul>

                    </div>

                </div>

            </nav>
        </>
    )
}

export default Header