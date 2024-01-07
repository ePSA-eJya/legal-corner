import React from 'react'
import "./MobileNav.css"

const MobileNav = ({isOpen,toggleMenu}) => {
  return (
    <>
        <div 
            className={`mobile-menu ${isOpen?"active":""}`}
            onClick={toggleMenu}
        >
            <div className='mobile-menu-container'>
                <img className='logo' src="" alt=""/>

                <ul>
                    <li>
                        <a className='menu-item' src="./home">Home</a>
                    </li>

                    <li>
                        <a className='menu-item'>Appointment</a>
                    </li>

                    <li>
                        <a className='menu-item'>Contact</a>
                    </li>

                    <li>
                        <a className='menu-item'>Updates</a>
                    </li>

                    <button className='contact-btn' onClick={()=>{}}>
                        Hello
                    </button>
                    
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav