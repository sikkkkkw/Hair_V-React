import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import logo from '../img/hair_v_logo.png';
import mobileLogo from '../img/logo가로.png'; // Import mobile logo
import main2 from '../img/메인2.png';
import main3 from '../img/메인3.png';
import mobileMain2 from '../img/가게시설1.jpg'; // Mobile image
import mobileMain3 from '../img/가게시설2.jpg'; // Mobile image
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import '../css/globals.css';
import Event from './Event';
import '../css/font.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [eventVisible, setEventVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const desktopImages = [main2, main3];
  const mobileImages = [mobileMain2, mobileMain3];
  const images = isMobile ? mobileImages : desktopImages;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth <= 767; // Adjusted to 767
      setIsMobile(isMobileSize);

      if (!isMobileSize) {
        setIsOpen(false); // Close mobile menu when resizing to desktop
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
    Cookies.set('hideBanner', 'true', { expires: 1 / 24 }); // 1 hour expiration
    setEventVisible(false);
  };

  return (
    <>
      <Event isVisible={eventVisible} handleClose={handleEventClose} />

      <div id="header" className={`fixed ${eventVisible ? 'top-8' : 'top-0'} left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 lg:px-32 md:px-12 z-40 transition-transform duration-300 header`}>
        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-4 fonttest transition-opacity duration-300`}>
          <a href="#Instagram" className="w-[120px] text-xl text-center">스타일리스트</a>
          <a href="#Hairimg" className="w-[120px] text-xl text-center">헤어시술</a>
        </div>

        {/* Conditionally render the logo based on device type */}
        <div className='flex items-center md:justify-center justify-start flex-1'>
          <img
            src={isMobile ? mobileLogo : logo}  // Dynamic logo change
            alt='Logo'
            className='h-14 md:h-20' 
          />
        </div>

        <div className={`hidden md:flex space-x-4 fonttest transition-opacity duration-300`}>
          <a href="#video" className="w-[120px] text-xl text-center">소개영상</a>
          <a href="#information" className="w-[120px] text-xl text-center">오시는 길</a>
        </div>

        {/* Toggle button only for screens <= 767px */}
        {isMobile && (
          <button
            className={`flex items-center p-2 z-30 hamburger ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        )}

        {/* Mobile menu */}
        <div className={`fixed inset-y-0 right-0 h-full z-20 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-1/2 md:hidden flex flex-col items-center pt-20`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <div className='flex flex-col fonttest'>
            <a href="#Instagram" className='py-2 menu-item'>스타일리스트</a>
            <a href="#Hairimg" className='py-2 menu-item'>헤어시술</a>
            <a href="#video" className='py-2 menu-item'>소개영상</a>
            <a href="#information"  className='py-2 menu-item'>오시는 길</a>
          </div>
          <div className='flex flex-col items-center mt-4 space-y-4'>
            <div className='flex space-x-4'>
              <a href="https://www.instagram.com/hair_v__official" target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:text-gray-900'>
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com/@su2__jung/featured" target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:text-gray-900'>
                <FaYoutube size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100003521889847&locale=ko_KR" target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:text-gray-900'>
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel section */}
      <div className='w-full h-[calc(var(--vh, 1vh) * 100)] overflow-hidden relative md:h-[calc(var(--vh, 1vh) * 100)]' style={{ paddingTop: '80px' }}>
        <div
          className='flex transition-transform duration-1000 ease-in-out'
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          <img src={images[0]} alt="carousel 1" className='w-full h-[50vh] md:h-full object-cover flex-shrink-0' />
          <img src={images[1]} alt="carousel 2" className='w-full h-[50vh] md:h-full object-cover flex-shrink-0' />
        </div>
      </div>
    </>
  );
}
