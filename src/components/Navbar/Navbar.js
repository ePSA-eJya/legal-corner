import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav';


const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false);

    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    }; 
  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src="" alt=""/>

                <ul>
                    <li>
                        <a className='menu-item' src="./home">Home</a>
                    </li>
                    <li>
                        <a className='menu-item'>Appointment</a>
                    </li>
                    <li>
                        <a className='menu-item' src=''>Contact</a>
                    </li>
                    <li>
                        <a className='menu-item'>Updates</a>
                    </li>
                    <button className='contact-btn' onClick={()=>{}}>
                        Login
                    </button>

                </ul>

                <button class='menu-btn' onClick={toggleMenu}>
                    <span class={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
                        {openMenu?"close":"menu"}
                    </span>
                </button>

            </div>
        </nav>
    </>
  )
}

export default Navbar