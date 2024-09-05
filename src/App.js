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
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
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


