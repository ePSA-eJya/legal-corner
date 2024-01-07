import React, { useState } from 'react'
import "./Services.css"
import Servicecard from './Servicescard/Servicescard.js'
import { SERVICES } from '../../utils/data.js'
import ServicesInfoCard from './ServicesInfoCard/ServicesInfoCard.js'

const Service = () => {
    const [selectedService,setselectedService]=useState(SERVICES[0]);

    const handleSelectService=(data)=>{
        setselectedService(data);
    };

  return (
   <section className='Services-continer'>
    <h5>Services Provided</h5>

    <div className='Services-content'>
        <div className='Services'>
            {SERVICES.map((item)=>(
                <Servicecard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedService.title===item.title}
                    onClick={()=>{
                        handleSelectService(item);
                    }}
                />
            ))}
        </div>

        <div className='Services-info'>
            <ServicesInfoCard
                heading={selectedService.title}
                Services={selectedService.Services}
            />
        </div>
    </div>
    </section>
  )
}

export default Service