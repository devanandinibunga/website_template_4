import React from 'react';
import './BookPageFooter.scss';
import {FaPhoneAlt,FaEnvelope,FaLocationArrow} from 'react-icons/fa';

export const BookPageFooter = () => {

    const footerData=[
        {icon:<FaPhoneAlt/>,details:"+82 345 829"},
        {icon:<FaEnvelope/>,details:"contact@me.com"},
        {icon:<FaLocationArrow/>,details:"1 Queenhithe London, UK EC4V 3DX"},
    ]

  return (
    <div className='book-page-footer-container'>
        <div className='book-page-footer-main-container'>
        {footerData.map((each)=>
            <div className='book-page-footer-inner-container'>
                <p className='book-page-footer-inner-container-icon'>{each.icon}</p>
                <p className='book-page-footer-inner-container-para'>{each.details}</p>
            </div>
        )}
        </div>
        <p className='book-page-footer-container-para'>©Novela 2021</p>
    </div>
  )
}
