import React from 'react';
import './CharactersInfo.scss';

export const CharactersInfo = () => {

  // const charactersData=[
  //   {image:"",name:"",description:""},
  //   {image:"",name:"",description:""},
  //   {image:"",name:"",description:""},
  // ]

  return (
    <div className='characters-info-container'>
      <h1 className='characters-info-container-title'>MEET THE CHARACTERS</h1>
         <div id="carouselExample" className="carousel slide carousel-fade characters-info-carousel-container">
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className='characters-info-carousel-left-container'>
                <img src="http://subsolardesigns.com/novelawp/wp-content/uploads/2014/10/alice.jpg" alt="/" className='characters-info-carousel-image'/>
              </div>
              <div className='characters-info-carousel-right-container'>
                <h1>Alice</h1>
                <p className="curosal-matter">
                So he sprang into the water, and the Tin Woodman caught fast hold of his tail. Then the Lion began to swim with all his might toward the shore. It was hard work, although he was so big; but by and by they were drawn out of the current, and then Dorothy took the Tin Woodman's long pole and helped push the raft to the land.
                </p>
             </div>
            </div>
            <div className="carousel-item">
              <div className='characters-info-carousel-left-container'>
                <img src="http://subsolardesigns.com/novelawp/wp-content/uploads/2014/10/cat.jpg" alt="/" className='peoples-say-carousel-image' />
              </div>
              <div className='characters-info-carousel-right-container'>
              <h1>Cheshire Cat</h1>
                <p className="curosal-matter">
                So, when they were rested, Dorothy picked up her basket and they started along the grassy bank, to the road from which the river had carried them. It was a lovely country, with plenty of flowers and fruit trees and sunshine to cheer them, and had they not felt so sorry for the poor Scarecrow, they could have been very happy.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className='characters-info-carousel-left-container'>
                <img src="http://subsolardesigns.com/novelawp/wp-content/uploads/2014/10/hare.jpg" alt="/" className='peoples-say-carousel-image' />
              </div>
              <div className='characters-info-carousel-right-container'>
              <h1>White Hare</h1>
                <p className="curosal-matter">
                Startup Institute is a career accelerator that allows professionals to learn new skills, take their careers in a different direction, and pursue a career they are passionate about that have completed the program.
                </p>
              </div>  
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
}
