import Hairimg from "./components/Hairimg";
import Header from "./components/Header";
import Instagram from "./components/Instagram";
import KakaoMap from "./components/KakaoMap";

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
    </div>
  );
}

export default App;
