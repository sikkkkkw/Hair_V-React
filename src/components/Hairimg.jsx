import React, { useState } from 'react';
import image1 from '../img/가격.jpg'; // 로컬 이미지 경로
import image2 from '../img/헤어브이.jpg'; // 로컬 이미지 경로
import image3 from '../img/헤어브이2.jpg'; // 로컬 이미지 경로
import image4 from '../img/헤어브이3.jpg'; // 로컬 이미지 경로
import image5 from '../img/물결펌1.jpg'; // 로컬 이미지 경로
import image6 from '../img/물결펌2.jpg'; // 로컬 이미지 경로
import image7 from '../img/번헤어1.jpg'; // 로컬 이미지 경로
import image8 from '../img/번헤어2.jpg'; // 로컬 이미지 경로
import image9 from '../img/무거운레이어드1.jpg'; // 로컬 이미지 경로
import image10 from '../img/무거운레이어드2.jpg'; // 로컬 이미지 경로
import image11 from '../img/태슬컷1.jpg'; // 로컬 이미지 경로
import image12 from '../img/태슬컷2.jpg'; // 로컬 이미지 경로
import image13 from '../img/빌드펌1.jfif'; // 로컬 이미지 경로
import image14 from '../img/빌드펌2.jfif'; // 로컬 이미지 경로
import image15 from '../img/포인트 염색2.jpg'; // 로컬 이미지 경로
import image16 from '../img/허쉬레이어드펌.jfif'; // 로컬 이미지 경로
import image17 from '../img/마음중단발레이어드.jpg'; // 로컬 이미지 경로
import image18 from '../img/중단발레이어드.jfif'; // 로컬 이미지 경로
import image19 from '../img/젤리펌.jfif'; // 로컬 이미지 경로
import image20 from '../img/젤리펌.jpg'; // 로컬 이미지 경로
import image21 from '../img/시스루댄디.jpg'; // 로컬 이미지 경로
import image22 from '../img/시스루애즈펌.jpg'; // 로컬 이미지 경로
import image23 from '../img/가르마펌.jpg'; // 로컬 이미지 경로
import image24 from '../img/파마.jfif'; // 로컬 이미지 경로
import { FaSearch, FaTimes } from 'react-icons/fa'; // 검색 및 초기화 아이콘

const images = [
  { src: image1, title: '헤어가격' },
  { src: image2, title: '가게시설' },
  { src: image3, title: '가게시설' },
  { src: image4, title: '가게시설' },
  { src: image5, title: '물결펌' },
  { src: image6, title: '물결펌' },
  { src: image7, title: '번헤어' },
  { src: image8, title: '번헤어' },
  { src: image9, title: '무거운레이어드' },
  { src: image10, title: '무거운레이어드' },
  { src: image11, title: '태슬컷' },
  { src: image12, title: '태슬컷' },
  { src: image13, title: '빌드펌' },
  { src: image14, title: '빌드펌' },
  { src: image15, title: '포인트 염색2' },
  { src: image16, title: '허쉬레이어드펌' },
  { src: image17, title: '중단발레이어드' },
  { src: image18, title: '중단발레이어드' },
  { src: image19, title: '젤리펌' },
  { src: image20, title: '젤리펌' },
  { src: image21, title: '시스루댄디' },
  { src: image22, title: '시스루애즈펌' },
  { src: image23, title: '가르마펌' },
  { src: image24, title: '파마' },
];

export default function Hairimg() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(images);
  const imagesPerPage = 12; // 한 페이지당 표시할 이미지 수
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  // 현재 페이지의 이미지 인덱스를 계산합니다
  const currentImages = filteredImages.slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage);

  const handleSearch = () => {
    setFilteredImages(
      images.filter(image =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setCurrentPage(1); // 검색 후 첫 페이지로 돌아가기
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilteredImages(images);
    setCurrentPage(1); // 초기화 후 첫 페이지로 돌아가기
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="py-12 px-4 lg:px-20 relative"> {/* relative 추가 */}
      {/* 검색 입력 필드 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-md p-4"> {/* 절대 위치로 중앙 정렬 */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown} // 엔터 키 이벤트 핸들러 추가
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

      {/* 이미지 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
        {currentImages.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white text-center py-2 rounded-b-lg">{image.title}</div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
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
