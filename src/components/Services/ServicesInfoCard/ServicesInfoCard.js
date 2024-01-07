import React from 'react'
import './ServicesInfoCard.css'

const ServiceInfoCard = ({heading,Services}) => {
  return <div className='Services-info-card'>
        <h6>{heading}</h6>

        <div className='Services-info-content'>
            {Services.map((item,index)=>{
                <React.Fragment key={`Service_${index}`}>
                    <div className='Service-info'>
                        <p>{item.Service}</p>
                        <p className='percentage'>{item.percentage}</p>
                    </div>

                    <div className='Service-progress-bg'>
                        <div className='Service-progree' style={{width:item.percentage}}/>
                    </div>
                </React.Fragment>
            })}
        </div>
    </div>;
  
};

export default ServiceInfoCard