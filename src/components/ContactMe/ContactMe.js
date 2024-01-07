import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';
import call from '../../assets/call.jpeg'
import mail from '../../assets/mail.png'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='container-content'>
            <div style={{flex:1}}>
                <ContactInfoCard
                    iconUrl={call}
                    text="123456789"
                />
                <ContactInfoCard
                    iconUrl={mail}
                    text="legal.corner@gmail.com"
                />
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  );
};

export default ContactMe