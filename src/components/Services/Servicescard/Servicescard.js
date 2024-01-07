import React from 'react'
import "./Servicescard.css"

const Servicecard = ({title,iconUrl,isActive,onClick}) => {
  return (
    <div className={`Services-card ${isActive ? "active":""}`}
    onClick={()=>onClick()}>
        <div className='Service-icon'>
            <img src={iconUrl} alt={title}/>
        </div>

        <span>{title}</span>
    </div>
  )
}

export default Servicecard