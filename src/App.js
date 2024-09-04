import React, { useState, useEffect } from 'react';
import Hairimg from "./components/Hairimg";
import Header from "./components/Header";
import Instagram from "./components/Instagram";
import './index.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 이 함수는 페이지가 완전히 로드된 후 실행됩니다
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Clean up 이벤트 리스너
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        </div>
      )}

      <div className={`flex justify-center items-center flex-col ${isLoading ? 'pointer-events-none' : ''}`}>
        <Header />
        <div id="Instagram" className="w-full">
          <Instagram />
        </div>
        <div id="Hairimg" className="w-full">
          <Hairimg />
        </div>
      </div>
    </>
  );
}

export default App;
