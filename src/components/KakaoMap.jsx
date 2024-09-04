import React, { useEffect } from 'react';
import pricelist from '../img/가격.jpg';

export default function KakaoMap() {
    useEffect(() => {
        // Kakao Maps API를 동적으로 로드
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: new  window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                };
                const map = new  window.kakao.maps.Map(container, options);
            });
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center py-20 md:py-24 px-4 bg-gray-100">
            <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">오시는 길</h2>
            <div className="border-b-2 border-red-500 w-16 mx-auto mb-10"></div>

            <div className="relative w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                <div id="map" className="w-full h-96"></div>
            </div>

            <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden p-10 space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="text-gray-700 space-y-4 md:w-3/5">
                        <h2 className="text-2xl font-bold text-gray-800">매장 정보</h2>
                        <p><strong>도로명: 대구 수성구 청솔로2길 37 1층</strong></p>
                        <p><strong>지번: 황금동 691-3</strong></p>
                        <p><strong>우편번호: 42144</strong></p>
                        
                        <h2 className="text-2xl font-semibold text-gray-800 mt-6">영업시간</h2>
                        <p><strong>화~수: 11:00 ~ 20:00</strong></p>
                        <p><strong>월: 정기휴무(매주 월요일)</strong></p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6">편의시설</h2>
                        <p><strong>건물 내 무료 주차</strong></p>
                        <p><strong>무선 인터넷</strong></p>
                        <p><strong>메이크업</strong></p>
                    </div>

                    <div className="mt-6 md:mt-0 md:w-[50%] md:pl-8">
                        <img src={pricelist} alt="가격표" className="flex justify-center items-center w-full h-auto lg:h-[480px] rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
