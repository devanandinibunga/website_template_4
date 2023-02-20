import React from 'react';
import './BookInfo.scss';
import {FaBook} from "react-icons/fa";

export const BookInfo = () => {
  return (
    <div className='book-info-container'>
        <div className='book-info-left-container'>
            <h1 className='book-info-left-container-title'>Go on a Journey</h1>
            <p className='book-info-left-container-caption'>Dive in the story right now.</p>
            <p className='book-info-left-container-para'>Dorothy thought she would go next; so she took Toto in her arms and climbed on the Lion’s back, holding tightly to his mane with one hand. The next moment it seemed as if she were flying through the air; and then, before she had time to think about it, she was safe on the other side.</p>
            <a className='book-info-left-container-button' href="http://subsolardesigns.com/novelawp/downloads/going-back-home/">Buy Book ($20)</a>
        </div>
        <div className='book-info-right-container'>
          {/* <h1>Hi</h1> */}
          <div className='book-info-right-inner-container'>
            <h1 className='book-info-right-container-title'>Read & Explore the Book</h1>
            <button className='book-info-right-container-button'><FaBook className='book-info-right-container-icon'/>READ</button>
          </div>
        </div>
    </div>
  )
}
