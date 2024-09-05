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
                    center: new window.kakao.maps.LatLng(35.8472390951582, 128.622467301239), // 대구 수성구 청솔로2길 37 좌표
                    level: 2 // 지도의 확대 레벨
                };
                const map = new window.kakao.maps.Map(container, options);

                const markerPosition = new window.kakao.maps.LatLng(35.8472390951582, 128.622467301239);
                const marker = new window.kakao.maps.Marker({ position: markerPosition });
                marker.setMap(map);

                const content = `<div style="padding:5px;background:white;border:1px solid black;border-radius:3px;">헤어브이</div>`;
                const customOverlay = new window.kakao.maps.CustomOverlay({
                    position: markerPosition,
                    content: content,
                    yAnchor: 2.2,
                });
                customOverlay.setMap(map);

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

                window.zoomIn = () => map.setLevel(map.getLevel() - 1);
                window.zoomOut = () => map.setLevel(map.getLevel() + 1);

                document.getElementById('btnRoadmap').addEventListener('click', () => setMapType('roadmap'));
                document.getElementById('btnSkyview').addEventListener('click', () => setMapType('skyview'));
            });
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center py-20 md:py-24 px-4 bg-gray-100 relative">
            <style>{`
                html, body {width:100%;height:100%;margin:0;padding:0;} 
                .map_wrap {position:relative;overflow:hidden;width:100%;height:350px; z-index: 0;} /* z-index 낮추기 */
                .radius_border {border:1px solid #919191;border-radius:5px;}     
                .custom_typecontrol {position:absolute;top:10px;right:10px;overflow:hidden;width:130px;height:30px;margin:0;padding:0;z-index:1;} /* z-index 낮추기 */
                .custom_typecontrol span {display:block;width:65px;height:30px;float:left;text-align:center;line-height:30px;cursor:pointer;}
                .custom_typecontrol .btn {background:#fff;background:linear-gradient(#fff, #e6e6e6);}       
                .custom_typecontrol .btn:hover {background:#f5f5f5;background:linear-gradient(#f5f5f5,#e3e3e3);}
                .custom_typecontrol .btn:active {background:#e6e6e6;background:linear-gradient(#e6e6e6, #fff);}    
                .custom_typecontrol .selected_btn {color:#fff;background:#425470;background:linear-gradient(#425470, #5b6d8a);}
                .custom_typecontrol .selected_btn:hover {color:#fff;}   

                .custom_zoomcontrol {position:absolute;top:50px;right:10px;width:36px;height:80px;overflow:hidden;z-index:1;} /* z-index 낮추기 */
                .custom_zoomcontrol span {display:flex;align-items:center;justify-content:center;width:36px;height:40px;cursor:pointer;}     
                .custom_zoomcontrol span img {width:20px;height:20px;border:none;}             
                .custom_zoomcontrol span:first-child {border-bottom:1px solid #bfbfbf;} 
            `}</style>

            <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">오시는 길</h2>
            <div className="border-b-2 border-red-500 w-16 mx-auto mb-10"></div>

            <div className="relative w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden mb-8 z-0"> {/* z-index 낮추기 */}
                <div id="map" className="w-full h-96"></div>

                {/* 지도 타입 전환 버튼 */}
                <div className="custom_typecontrol">
                    <span id="btnRoadmap" className="btn selected_btn">지도</span>
                    <span id="btnSkyview" className="btn">스카이뷰</span>
                </div>

                {/* 지도 확대/축소 버튼 */}
                <div className="custom_zoomcontrol">
                    <span onClick={() => window.zoomIn()}><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" /></span>
                    <span onClick={() => window.zoomOut()}><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" /></span>
                </div>
            </div>
        </div>
    );
}
