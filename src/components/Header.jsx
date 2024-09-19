import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import logo from '../img/hair_v_logo.png';
import main2 from '../img/메인2.png';
import main3 from '../img/메인3.png';
import mobileMain2 from '../img/가게시설1.jpg'; // 모바일 이미지
import mobileMain3 from '../img/가게시설2.jpg'; // 모바일 이미지
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'; // 아이콘 임포트
import '../css/globals.css';
import Event from './Event';
import '../css/font.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [eventVisible, setEventVisible] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1024); // Adjusted for tablets

  const desktopImages = [main2, main3];
  const mobileImages = [mobileMain2, mobileMain3];

  const images = isMobileOrTablet ? mobileImages : desktopImages;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024); // Adjusted for tablets
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

      <div id="header" className={`fixed ${eventVisible ? 'top-8' : 'top-0'} left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 lg:px-32 md:px-12 z-40 transition-transform duration-300 header`}>
        <div className={`hidden md:flex space-x-4 ${isOpen ? 'opacity-0' : 'opacity-100'} fonttest transition-opacity duration-300`}>
          <a href="#Instagram" className="w-[120px] text-xl text-center">스타일리스트</a>
          <a href="#Hairimg" className="w-[120px] text-xl text-center">헤어시술</a>
        </div>

        <div className='flex items-center md:justify-center justify-start flex-1'>
          <img src={logo} alt='Logo' className='h-20' />
        </div>

        <div className={`hidden md:flex space-x-4 ${isOpen ? 'opacity-0' : 'opacity-100'} fonttest transition-opacity duration-300`}>
          <a href="#video" className="w-[120px] text-xl text-center">소개영상</a>
          <a href="#information" className="w-[120px] text-xl text-center">오시는 길</a>
        </div>

        <button
          className={`md:hidden flex items-center p-2 z-30 hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        <div className={`fixed inset-y-0 right-0 h-full z-20 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-1/2 md:hidden flex flex-col items-center pt-20`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <div className='flex flex-col fonttest'>
            <a href="#Instagram" className='py-2 menu-item'>스타일리스트</a>
            <a href="#Hairimg" className='py-2 menu-item'>헤어시술</a>
            <a href="#video" className='py-2 menu-item'>소개영상</a>
            <a href="#information"  className='py-2 menu-item'>오시는 길</a>
          </div>
          <div className='flex flex-col items-center mt-4 space-y-4'>
            {/* 소셜미디어 아이콘 추가 */}
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
            {/* 문의하기 버튼 추가
            <a href="mailto:contact@example.com" className='py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
              문의하기
            </a> */}
          </div>
        </div>
      </div>

      <div className='w-full h-[calc(var(--vh, 1vh) * 100)] overflow-hidden relative'>
        <div
          className='flex transition-transform duration-1000 ease-in-out'
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          <img src={images[0]} alt="carousel 1" className='w-full h-full object-cover flex-shrink-0 mobile-height' />
          <img src={images[1]} alt="carousel 2" className='w-full h-full object-cover flex-shrink-0 mobile-height' />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .mobile-height {
            height: 80vh; /* 모바일에서 높이 조정 */
          }
        }
      `}</style>
    </>
  );
}
