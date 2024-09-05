import React, { useEffect } from 'react';
import logo from '../img/hair_v_logo.png';

const LoadingScreen = () => {
  useEffect(() => {
    // Disable scrolling when loading screen is visible
    document.body.style.overflow = 'hidden';

    return () => {
      // Enable scrolling when loading screen is hidden
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
      <img
        src={logo} // 로고 이미지의 경로로 수정하세요
        alt="Loading..."
        className="w-36 h-auto"
      />
    </div>
  );
};

export default LoadingScreen;
