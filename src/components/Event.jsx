import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import X from '../img/x_icon.png'

export default function Event() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hideBanner = Cookies.get('hideBanner');
    if (!hideBanner) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    Cookies.set('hideBanner', 'true', { expires: 1 / 24 }); // 1시간 후 만료
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className='bg-blue-400 w-full h-8'>
        <div className='flex justify-between items-center h-full'>
          <div className='flex-1 text-center'>안녕하세요. 헤어브이입니다. 환영합니다</div>
          <div className='pr-4 cursor-pointer' onClick={handleClose}>
            <img src={X} alt="Close" className="h-4 w-4" /> 
          </div>
        </div>
      </div>
    )
  );
}