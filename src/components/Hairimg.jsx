import React, { useState, useEffect } from 'react';
import '../css/font.css';
// import image1 from '../img/마음원장.jfif'; 
// import image2 from '../img/헤어브이.jpg'; 
// import image3 from '../img/헤어브이2.jpg'; 
// import image4 from '../img/헤어브이3.jpg'; 
import image5 from '../img/물결펌1.jpg'; 
import image6 from '../img/번헤어1.jpg'; 
import image7 from '../img/무거운레이어드1.jpg'; 
import image8 from '../img/태슬컷1.jpg'; 
import image9 from '../img/레이어드컷.jfif'; 
import image10 from '../img/파마.jfif'; 
import image11 from '../img/포인트 애교머리 스타일링.jpg'; 
import image12 from '../img/중단발레이어드.jfif'; 
import image13 from '../img/빌드펌1.jfif'; 
import image14 from '../img/롱 레이어드.jpg'; 
import image15 from '../img/포인트 염색2.jpg'; 
import image16 from '../img/가르마펌.jpg'; 
import image17 from '../img/마음중단발레이어드.jpg'; 
import image18 from '../img/레이어드1.jfif'; 
import image19 from '../img/물결펌.jfif'; 
import image20 from '../img/젤리펌.jpg'; 
import image21 from '../img/미디움 시스루 댄디1.jpg'; 
import image22 from '../img/미디움 애즈펌.jpg'; 
import image23 from '../img/미디움 시스루 댄디.jpg'; 
import image24 from '../img/허쉬레이어드펌.jfif'; 
import { FaSearch, FaTimes } from 'react-icons/fa'; 

const images = [
  // { src: image1, title: '마음 원장' },
  // { src: image2, title: '가게시설' },
  // { src: image3, title: '가게시설' },
  // { src: image4, title: '가게시설' },
  { src: image5, title: '물결펌' },
  { src: image6, title: '번헤어' },
  { src: image7, title: '무거운레이어드' },
  { src: image8, title: '태슬컷' },
  { src: image9, title: '레이어드컷' },
  { src: image10, title: '파마' },
  { src: image11, title: '포인트 애교머리 스타일링' },
  { src: image12, title: '중단발레이어드' },
  { src: image13, title: '빌드펌' },
  { src: image14, title: '롱 레이어드' },
  { src: image15, title: '포인트 염색' },
  { src: image16, title: '가르마펌' },
  { src: image17, title: '중단발레이어드' },
  { src: image18, title: '레이어드컷' },
  { src: image19, title: '물결펌' },
  { src: image20, title: '젤리펌' },
  { src: image21, title: '미디움 시스루 댄디' },
  { src: image22, title: '미디움 애즈펌' },
  { src: image23, title: '미디움 시스루 댄디' },
  { src: image24, title: '허쉬레이어드펌' },
];

export default function Hairimg() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(images);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState({});
  const imagesPerPage = 12; 
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  useEffect(() => {
    setLoading(true);
    const imgElements = filteredImages
      .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage)
      .map((image) => {
        const img = new Image();
        img.src = image.src;
        return img;
      });

    const onAllImagesLoaded = () => {
      setLoading(false);
    };

    let imagesLoadedCount = 0;
    imgElements.forEach((imgElement) => {
      imgElement.onload = () => {
        imagesLoadedCount++;
        if (imagesLoadedCount === imgElements.length) {
          onAllImagesLoaded();
        }
      };
    });

    return () => {
      imgElements.forEach((imgElement) => {
        imgElement.onload = null;
      });
    };
  }, [currentPage, filteredImages]);

  const currentImages = filteredImages.slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage);

  const handleSearch = () => {
    setFilteredImages(
      images.filter(image =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilteredImages(images);
    setCurrentPage(1);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleImageLoad = (index) => {
    setImageLoading(prev => ({
      ...prev,
      [index]: false
    }));
  };

  return (
    <div className="py-20 md:py-24 px-4 lg:px-20 relative fonttest">
      <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">헤어시술</h2>
      <div className="border-b-2 border-red-500 w-16 mx-auto mb-10"></div>

      <div className="relative flex justify-center mb-10">
        <div className="w-full max-w-md">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="px-4 py-2 w-full border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleSearch}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              <FaSearch />
            </button>
            {searchTerm && (
              <button
                onClick={handleReset}
                className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {currentImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              {imageLoading[index] === false ? null : (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="loader"></div>
                </div>
              )}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-lg"
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageLoad(index)}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white text-center py-2 rounded-b-lg">
                {image.title}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out disabled:bg-gray-300"
        >
          이전
        </button>
        <span className="px-4 py-2 flex items-center justify-center text-lg">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out disabled:bg-gray-300"
        >
          다음
        </button>
      </div>
    </div>
  );
}
