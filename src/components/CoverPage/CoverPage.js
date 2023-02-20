import React from 'react';
import './CoverPage.scss';

export const CoverPage = () => {
  return (
    <>
    <div className='cover-page-container'>
        <div className='cover-page-details-container'>
            <h1 className='cover-page-title'>Perfect Landing Page For Your Book!</h1>
            <p className='cover-page-description'>Finally, I always go to sea as a sailor, because of the wholesome exercise and pure air of the fore-castle deck. For as in this world, head winds are far more prevalent than winds from astern.</p>
            <div className='cover-page-button-container'>
            <button data-inline="true" className='cover-page-btn'>$2.50 - BUY BOOK</button>
            <button data-inline="true" className='cover-page-btn'>READ THE BOOK</button>
            </div>
       </div>      
      <div className='cover-page-image-container'>
        <img className='cover-page-image' src='http://subsolardesigns.com/novelawp/wp-content/uploads/2014/10/book2.png' alt='/'/>
      </div>
    </div>
    </>
  )
}
