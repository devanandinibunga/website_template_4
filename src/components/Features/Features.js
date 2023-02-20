import React from 'react';
import './Features.scss';
import {FaAnchor} from 'react-icons/fa';

export const Features = () => {
    
    const featuresData=[
        {name:"Adventure",description:"Hundreds must have seen it, and taken it for an ordinary falling star. Albin described it as leaving a greenish streak behind it that glowed for some seconds.",icon:<FaAnchor/>},
        {name:"Mistery",description:"Hundreds must have seen it, and taken it for an ordinary falling star. Albin described it as leaving a greenish streak behind it that glowed for some seconds.",icon:<FaAnchor/>},
        {name:"Romance",description:"Hundreds must have seen it, and taken it for an ordinary falling star. Albin described it as leaving a greenish streak behind it that glowed for some seconds.",icon:<FaAnchor/>},
    ]

  return (
    <div className='features-container'>
        <h1 className='features-container-title'>A Story About.</h1>
        <div className='features-main-container'>
        {featuresData.map((feature,i)=>
        <div key={i} className='features-inner-container'>
           <span className='features-inner-container-icon'>{feature.icon}</span>
            <div className='features-inner-details-container'>
                <div  className='features-inner-container-title'>{feature.name}</div>
                <p className='features-inner-container-para'>{feature.description}</p>
            </div>
        </div>
        )}
        </div>
    </div>
  )
}
