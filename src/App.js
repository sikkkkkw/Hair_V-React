import React, { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import Hairimg from "./components/Hairimg";
import Header from "./components/Header";
import Instagram from "./components/Instagram";
import KakaoMap from "./components/KakaoMap";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      {loading && <LoadingScreen />}
      <Header />
      <div id="Instagram" className="w-full">
        <Instagram />
      </div>
      <div id="Hairimg" className="w-full">
        <Hairimg />
      </div>
      <div id="information" className="w-full">
        <KakaoMap />
      </div>
      <Footer />
      <ScrollToTop /> 
    </div>
  );
}

export default App;
