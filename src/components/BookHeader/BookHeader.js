import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import './BookHeader.scss';
import {AiOutlineMenu} from 'react-icons/ai';

export const BookHeader = () => {

    const bookHeaderData=[
        {name:"HOME"},
        {name:"ABOUT US"},
        {name:"SERVICES"},
        {name:"PRICING PLAN"},
        {name:"BLOG"},
        {name:"PAGE"},
        {name:"SHOP"},
        {name:"CONTACT US"},
    
    ]

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };


  return (
         <div className='book-header-container'>
            <AiOutlineMenu className='book-header-icon' onClick={showDrawer}/>
            <Drawer
              placement="right"
              closable={false}
              // id='trax-header-side-containner'
              width={300}
              onClose={onClose}
              open={open}
              key="right"
              title=" "
              extra={<Button onClick={onClose}>&times;</Button>}
            >
            <div className='book-header-drawer-container'>
            {bookHeaderData.map((item)=>
            <p>{item.name}</p>
            )}
            </div>
            </Drawer> 
          </div>
  )
}
