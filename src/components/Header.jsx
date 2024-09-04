import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import logo from '../img/hair_v_logo.png';
import main2 from '../img/메인2.png';
import main3 from '../img/메인3.png';
import '../css/globals.css';
import Event from './Event';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [eventVisible, setEventVisible] = useState(true);

  const images = [main2, main3]; // 이미지 배열

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVh();
    window.addEventListener('resize', updateVh);

    return () => {
      window.removeEventListener('resize', updateVh);
    };
  }, []);

  const handleEventClose = () => {
    Cookies.set('hideBanner', 'true', { expires: 1 / 24 }); // 1시간 후 만료
    setEventVisible(false);
  };

  return (
    <>
      <Event isVisible={eventVisible} handleClose={handleEventClose} />

      <div className={`fixed ${eventVisible ? 'top-8' : 'top-0'}  left-0 w-full h-[80px] bg-white flex items-center justify-between  px-4 lg:px-24 md:px-12 z-40 transition-transform duration-300 ${'translate-y-0'} header`}>
        <div className={`hidden md:flex space-x-4 ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <div className="w-[120px] text-center">스타일리스트</div>
          <div className="w-[120px] text-center">이벤트 / 헤어</div>
        </div>
        
        <div className='flex items-center justify-center flex-1'>
          <img src={logo} alt='Logo' className='h-20' />
        </div>
        
        <div className={`hidden md:flex space-x-4 ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <div className="w-[120px] text-center">영상</div>
          <div className="w-[120px] text-center">오시는길</div>
        </div>

        <button 
          className={`md:hidden flex items-center p-2 z-30 hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        <div className={`fixed inset-y-0 right-0 h-full bg-white  z-20 transition-transform transform  ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-1/2 md:hidden flex flex-col items-center pt-20 `}>
         <div className='flex flex-col'>
          <div className='py-2 menu-item'>스타일리스트</div>
          <div className='py-2 menu-item'>이벤트/헤어</div>
          <div className='py-2 menu-item'>영상</div>
          <div className='py-2 menu-item'>오시는길</div>
         </div>
        </div>

        <div className="header-underline"></div>
      </div>

      <div className='w-full h-[calc(var(--vh, 1vh) * 100)] overflow-hidden relative ' style={{ paddingTop: '80px' }}>
        <div
          className='flex transition-transform duration-1000 ease-in-out'
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          <img src={main2} alt="carousel 1" className='w-full h-full object-cover flex-shrink-0' />
          <img src={main3} alt="carousel 2" className='w-full h-full object-cover flex-shrink-0' />
        </div>
      </div>
    </>
  );
}
