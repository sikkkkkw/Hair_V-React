import React from 'react';
import { FaInstagram } from 'react-icons/fa'; 
import '../css/font.css';

export default function Instagram() {
  // 스타일리스트 데이터를 배열로 관리
  const stylists = [
    {
        name: '마음 원장',
        hashtag: '#hair_v.maeum',
        instagram: 'https://www.instagram.com/hair_v.maeum',
      },
    {
      name: 'Hair_V',
      hashtag: '#hair_v__official',
      instagram: 'https://www.instagram.com/hair_v__official',
    },
    {
      name: '혜미 인턴',
      hashtag: '#hair_v_hm',
      instagram: 'https://www.instagram.com/hair_v_hm',
    },
  ];

  return (
    <div className="bg-gray-100 py-20 md:py-24 px-4 lg:px-20 w-full fonttest">
      <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">스타일리스트</h2>
      <div className="border-b-2 border-red-500 w-16 mx-auto mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-16">
        {stylists.map((stylist, index) => (
          <div key={index} className="text-center">
            <a href={stylist.instagram} target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-500 flex-wrap">
              <FaInstagram className="text-6xl mx-auto mb-4 lg:mb-6" />
              <h3 className="font-semibold text-xl lg:text-2xl">{stylist.name}</h3>
              <p className="text-gray-600 text-sm lg:text-base">{stylist.hashtag}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
