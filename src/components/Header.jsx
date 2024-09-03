import React, { useState, useEffect } from 'react';
import logo from '../img/hair_v_logo.png';
import main2 from '../img/메인2.png';
import main3 from '../img/메인3.png';
import '../css/globals.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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
    // 3초마다 이미지 인덱스를 변경
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setIsScrollingDown(true);  // 페이지를 내릴 때 헤더를 숨김
      } else {
        setIsScrollingDown(false); // 페이지를 올릴 때 헤더를 표시
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

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

  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 z-40 transition-transform duration-300 ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'} header`}>
        {/* 좌측 메뉴 - 모바일 모드에서는 숨김 */}
        <div className={`hidden md:flex space-x-4 ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <div className="w-[120px] text-center">스타일리스트</div>
          <div className="w-[120px] text-center">이벤트 / 헤어</div>
        </div>
        
        {/* 로고 */}
        <div className='flex items-center justify-center flex-1'>
          <img src={logo} alt='Logo' className='h-20' />
        </div>
        
        {/* 우측 메뉴 - 모바일 모드에서는 숨김 */}
        <div className={`hidden md:flex space-x-4 ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <div className="w-[120px] text-center">영상</div>
          <div className="w-[120px] text-center">오시는길</div>
        </div>

        {/* 토글 버튼 (모바일에서만 표시) */}
        <button 
          className={`md:hidden flex items-center p-2 z-30 hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        {/* 모바일 메뉴 */}
        <div className={`fixed inset-y-0 right-0 h-full bg-white  z-20 transition-transform transform  ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-1/2 md:hidden flex flex-col items-center pt-20 `}>
         <div className='flex flex-col'>
          <div className='py-2 menu-item'>스타일리스트</div>
          <div className='py-2 menu-item'>이벤트/헤어</div>
          <div className='py-2 menu-item'>영상</div>
          <div className='py-2 menu-item'>오시는길</div>
         </div>
        </div>

        {/* 밑줄 추가 */}
        <div className="header-underline"></div>
      </div>

      {/* 캐러셀 */}
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
