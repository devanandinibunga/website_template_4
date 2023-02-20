import React from 'react';
import './Journal.scss';
import {FaRegFolder,FaRegCalendar} from 'react-icons/fa';

export const Journal = () => {
  const journalData=[
    {image:"http://subsolardesigns.com/novelawp/wp-content/uploads/2014/10/cross_over_together_by_aquasixio-d7nbuag-600x600.jpg",title:"The Journey Under the Waves",statusIcon:<FaRegFolder/>,status:"Writing",dateIcon:<FaRegCalendar/>,date:"21 Oct 14"},
    {image:"http://subsolardesigns.com/novelawp/wp-content/uploads/2014/10/all_my_studies_by_aquasixio-d76knmd-600x600.jpg",title:"A Night in The Circus",statusIcon:<FaRegFolder/>,status:"Writing",dateIcon:<FaRegCalendar/>,date:"21 Oct 14"},
    {image:"http://subsolardesigns.com/novelawp/wp-content/uploads/2014/10/enjoy_the_silence_by_aquasixio-d72js0b-600x600.jpg",title:"If One Only Knew the Right Way",statusIcon:<FaRegFolder/>,status:"Writing",dateIcon:<FaRegCalendar/>,date:"21 Oct 14"},
]

  return (
    <div className='journal-container'>
        <h1 className='journal-container-title'>Journal.</h1>
        <div className='journal-main-container'>
        {journalData.map((journal)=>
            <div className='journal-inner-container'>
              <div className='journal-inner-container-image-container'>
                <img className='journal-inner-container-image' src={journal.image} alt="journal-pic"/>
                {/* <div className='journal-inner-container-image-mask'></div> */}
              </div>
                <h2 className='journal-inner-container-title'>{journal.title}</h2>
                <div className='journal-inner-bottom-container'>
                    <p className='journal-inner-bottom-container-date'><span className='journal-inner-bottom-container-span'>{journal.statusIcon}</span>{journal.status}</p>
                    <p className='journal-inner-bottom-container-date'><span className='journal-inner-bottom-container-span' >{journal.dateIcon}</span>{journal.date}</p>
                </div>
            </div>
        )}
        </div>
    </div>
  )
}
