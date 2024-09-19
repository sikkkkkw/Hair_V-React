import React from 'react';
import Image1 from '../img/logo.png'; // Hair_V 이미지
import Image2 from '../img/마음원장.jfif'; // 마음 원장 이미지
import Image3 from '../img/혜미인턴.jpg'; // 혜미 인턴 이미지
import '../css/font.css';

export default function Instagram() {
  // 스타일리스트 데이터를 배열로 관리
  const stylists = [
    {
      hashtag: '#hair_v__official',
      instagram: 'https://www.instagram.com/hair_v__official',
      image: Image1,
    },
    {
      hashtag: '#hair_v.maeum',
      instagram: 'https://www.instagram.com/hair_v.maeum',
      image: Image2,
    },
    {
      hashtag: '#hair_v_hm',
      instagram: 'https://www.instagram.com/hair_v_hm',
      image: Image3,
    },
  ];

  return (
    <div className="bg-gray-100 py-20 md:py-24 px-4 lg:px-20 w-full fonttest">
      <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">스타일리스트</h2>
      <div className="border-b-2 border-red-500 w-16 mx-auto mb-10"></div>

      {/* 모바일에서는 1열, 중간 이상에서는 3열로 설정 */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-8 lg:gap-16">
        {stylists.map((stylist, index) => (
          <div key={index} className="text-center">
            <a href={stylist.instagram} target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-500">
              {/* 스타일리스트 이미지 */}
              <img 
                src={stylist.image} 
                alt={stylist.name} 
                className="rounded-full w-20 h-20 md:w-40 md:h-40 mx-auto mb-2 md:mb-4 lg:mb-6 object-cover" 
              />
              {/* 해시태그 크기 조정 */}
              <p className="font-semibold text-[10px] md:text-lg lg:text-2xl">{stylist.hashtag}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
