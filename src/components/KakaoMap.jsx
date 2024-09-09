import React, { useEffect } from 'react';
import pricelist from '../img/가격.jpg';
import '../css/font.css';

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
                    center: new window.kakao.maps.LatLng(35.8472390951582, 128.622467301239), // 대구 수성구 청솔로2길 37 좌표
                    level: 2 // 지도의 확대 레벨
                };
                const map = new window.kakao.maps.Map(container, options);

                // 마커가 표시될 위치입니다 
                const markerPosition = new window.kakao.maps.LatLng(35.8472390951582, 128.622467301239);

                // 마커를 생성합니다
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);

                // 마커 위에 텍스트를 표시하는 커스텀 오버레이를 생성합니다
                const content = `<div style="padding:5px;background:white;border:1px solid black;border-radius:3px;">헤어브이</div>`;

                const customOverlay = new window.kakao.maps.CustomOverlay({
                    position: markerPosition,
                    content: content,
                    yAnchor: 2.2,  // 마커 위로 텍스트를 띄우기 위해 yAnchor 값을 조정
                });

                customOverlay.setMap(map);

                // 지도 타입을 변경하는 함수
                const setMapType = (maptype) => {
                    const roadmapControl = document.getElementById('btnRoadmap');
                    const skyviewControl = document.getElementById('btnSkyview');
                    if (maptype === 'roadmap') {
                        map.setMapTypeId(window.kakao.maps.MapTypeId.ROADMAP);
                        roadmapControl.className = 'selected_btn';
                        skyviewControl.className = 'btn';
                    } else {
                        map.setMapTypeId(window.kakao.maps.MapTypeId.HYBRID);
                        skyviewControl.className = 'selected_btn';
                        roadmapControl.className = 'btn';
                    }
                };

                // 지도 확대, 축소 함수
                window.zoomIn = () => map.setLevel(map.getLevel() - 1);
                window.zoomOut = () => map.setLevel(map.getLevel() + 1);

                // 스카이뷰/로드맵 버튼 클릭 이벤트 핸들러 추가
                document.getElementById('btnRoadmap').addEventListener('click', () => setMapType('roadmap'));
                document.getElementById('btnSkyview').addEventListener('click', () => setMapType('skyview'));
            });
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center py-20 md:py-24 px-4 fonttest">
            <style>{`
                html, body {width:100%;height:100%;margin:0;padding:0;} 
    .map_wrap {position:relative;overflow:hidden;width:100%;height:350px; z-index: 0;}
                .radius_border{border:1px solid #919191;border-radius:5px;}     
                .custom_typecontrol {position:absolute;top:10px;right:10px;overflow:hidden;width:130px;height:30px;margin:0;padding:0;z-index:1;font-size:12px;font-family:'Malgun Gothic', '맑은 고딕', sans-serif;}
                .custom_typecontrol span {display:block;width:65px;height:30px;float:left;text-align:center;line-height:30px;cursor:pointer;}
                .custom_typecontrol .btn {background:#fff;background:linear-gradient(#fff,  #e6e6e6);}       
                .custom_typecontrol .btn:hover {background:#f5f5f5;background:linear-gradient(#f5f5f5,#e3e3e3);}
                .custom_typecontrol .btn:active {background:#e6e6e6;background:linear-gradient(#e6e6e6, #fff);}    
                .custom_typecontrol .selected_btn {color:#fff;background:#425470;background:linear-gradient(#425470, #5b6d8a);}
                .custom_typecontrol .selected_btn:hover {color:#fff;}   

                .custom_zoomcontrol {position:absolute;top:50px;right:10px;width:36px;height:80px;overflow:hidden;z-index:1;background-color:#f5f5f5;} 
                .custom_zoomcontrol span {display:flex;align-items:center;justify-content:center;width:36px;height:40px;cursor:pointer;}     
                .custom_zoomcontrol span img {width:20px;height:20px;border:none;}             
                .custom_zoomcontrol span:first-child {border-bottom:1px solid #bfbfbf;} 
            `}</style>


            <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 ">오시는 길</h2>
            <div className="border-b-2 border-red-500 w-16 mx-auto mb-10"></div>

            <div className="relative w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                <div id="map" className="w-full h-96"></div>

                {/* 지도 타입 전환 버튼 */}
                <div className="custom_typecontrol">
                    <span id="btnRoadmap" className="btn selected_btn">지도</span>
                    <span id="btnSkyview" className="btn">스카이뷰</span>
                </div>

                {/* 지도 확대/축소 버튼 */}
                <div className="custom_zoomcontrol">
                    <span className='flex justify-center items-center' onClick={() => window.zoomIn()}><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" /></span>
                    <span onClick={() => window.zoomOut()}><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" /></span>
                </div>
            </div>

            <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden p-10 space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="text-gray-700 space-y-4 md:w-3/5">
                        <h2 className="text-2xl font-bold text-gray-800">매장 정보</h2>
                        <p><strong>도로명: 대구 수성구 청솔로2길 37 1층</strong></p>
                        <p><strong>지번: 황금동 691-3</strong></p>
                        <p><strong>우편번호: 42144</strong></p>
                        <p><strong>전화번호: 053-768-7738</strong></p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6">영업시간</h2>
                        <p><strong>11:00 ~ 20:00</strong></p>
                        <p><strong>매주 월요일 정기휴무</strong></p>

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
