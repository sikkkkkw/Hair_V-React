import { useState, useEffect } from "react";
import { FaArrowUp, FaPhoneAlt } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top of the page when clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-10 right-6 flex flex-col items-center space-y-4 z-40"> {/* z-index를 높게 설정 */}
          {/* 전화 걸기 버튼 */}
          <a
            href="tel:053-768-7738" // 원하는 전화번호로 설정
            className="bg-blue-400 text-white p-3 rounded-full shadow-md hover:bg-blue-500 transition"
          >
            <FaPhoneAlt size={24} />
          </a>

          {/* 스크롤 탑 버튼 */}
          <button
            onClick={scrollToTop}
            className="bg-blue-400 text-white p-3 rounded-full shadow-md hover:bg-blue-500 transition"
          >
            <FaArrowUp size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
