import React from 'react'
import './Hero.css'
import logo from '../../assets/Logo.png'
import i1 from '../../assets/1.jpg'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Legal Corner</h2>
            <p>Welcome to Legal Corner, where legal expertise meets personalized service. Our mission is to provide exceptional legal solutions with a client-centered approach. With years of experience and a commitment to excellence, we are your trusted partners in navigating the complexities of the legal system.</p>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src={i1} alt='hkh'/>
                </div>
                <img src={logo} alt='fs'/>
            </div>

            <div>
                <div className='tech-icon'>
                    <img src={i1} alt=''/>
                </div>
                <div className='tech-icon'>
                    <img src={i1} alt=''/>
                </div>
                <div className='tech-icon'>
                    <img src={i1} alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero