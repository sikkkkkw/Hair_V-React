import React, { useState, useEffect } from 'react';
import logo from '../img/hair_v_logo.png';
import '../css/globals.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 화면 크기 변경 시 모바일 메뉴 상태 초기화
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

  return (
    <div className='relative bg-red-300 w-full h-[80px] flex items-center justify-between px-4'>
      {/* 좌측 메뉴 */}
      <div className={`hidden md:flex space-x-4 ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <div>스타일리스트</div>
        <div>이벤트/헤어</div>
      </div>
      
      {/* 로고 */}
      <div className='flex items-center'>
        <img src={logo} alt='Logo' className='h-20' />
      </div>
      
      {/* 우측 메뉴 */}
      <div className={`hidden md:flex space-x-4 ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <div>영상</div>
        <div>오시는길</div>
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
      <div className={`fixed inset-y-0 right-0 bg-white z-20 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-1/2 md:hidden flex flex-col items-center pt-20`}>
        <div className='py-2 menu-item'>스타일리스트</div>
        <div className='py-2 menu-item'>이벤트/헤어</div>
        <div className='py-2 menu-item'>영상</div>
        <div className='py-2 menu-item'>오시는길</div>
      </div>
    </div>
  );
}
