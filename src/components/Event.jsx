import React, { useEffect } from 'react';
import X from '../img/x_icon.png';
import Cookies from 'js-cookie';
import '../css/font.css';

export default function Event({ isVisible, handleClose }) {
  useEffect(() => {
    const hideBanner = Cookies.get('hideBanner');
    if (hideBanner) {
      handleClose();
    }
  }, [handleClose]);

  return (
    isVisible && (
      <div className='bg-blue-400 w-full h-8 z-50 fixed top-0 left-0 flex justify-between items-center fonttest'>
        <div className='flex-1 text-center text-sm md:text-base lg:text-lg truncate'>
          안녕하세요. 마음입니다! 한분 한분 최선을 다해 만족 시켜 드리겠습니다.
        </div>
        <div className='pr-4 cursor-pointer' onClick={handleClose}>
          <img src={X} alt="Close" className="h-4 w-4" /> 
        </div>
      </div>
    )
  );
}
