import Footer from "./components/Footer";
import Hairimg from "./components/Hairimg";
import Header from "./components/Header";
import Instagram from "./components/Instagram";
import KakaoMap from "./components/KakaoMap";
import ScrollToTop from "./components/ScrollToTop"; // Import the scroll button


function App() {
  return (
    <div className="flex justify-center items-center flex-col">
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

