import React from 'react';
import './ContactInfo.scss';
import {RxEnvelopeClosed} from 'react-icons/rx';

export const ContactInfo = () => {
  return (
    <div className='contact-info-container'>
        <h1 className='contact-info-container-title'>Hello.</h1>
        <input placeholder='Name' className='contact-info-container-input'/>
        <input placeholder='Email' className='contact-info-container-input'/>
        <textarea className='contact-info-container-text-area' placeholder='Write your message...'></textarea>
        <button className='contact-info-container-button'><RxEnvelopeClosed className='book-info-right-container-icon'/>SEND</button>
    </div>
  )
}
