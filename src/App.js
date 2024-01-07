import './App.css';
import React from 'react'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar/>

      <div className='container'>
        <Hero/>
        <Services/>
        <WorkExperience/>
        <ContactMe/>
      </div>

      <Footer/>
    </>
  );
}

export default App;
