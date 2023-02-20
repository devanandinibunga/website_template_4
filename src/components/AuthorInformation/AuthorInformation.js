import React from 'react';
import './AuthorInformation.scss';

export const AuthorInformation = () => {
  return (
    <div className='author-info-container'>
        <div className='author-info-left-container'>
            <img className='author-info-left-container-image' src='http://subsolardesigns.com/novelawp/wp-content/uploads/2014/10/author.jpg' alt='author-pic'/>
        </div>
        <div className='author-info-right-container'>
            <h1 className='author-info-right-container-title'>Rebecca Collins</h1>
            <p className='author-info-right-container-caption'>Rebecca Collins is a short story author, novelist, and award-winning poet.</p>
            <p className='author-info-right-container-para'>She has work appearing or forthcoming in over a dozen venues, including Buzzy Mag, The Spirit of Poe, and the British Fantasy Society journal Dark Horizons. Rebecca is also CEO of a company, specializing in custom book publishing and social media marketing services, have created a community for authors to learn and connect.</p>
        </div>
    </div>
  )
}
