// components/NaverMap.js
"use client";  // Next.js App Router에서 브라우저 코드임을 명시

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { restaurants } from "@/data/restaurants";
import RestaurantCard from "./RestaurantCard";

export default function NaverMap() {
  const mapRef = useRef(null);       // 지도를 붙일 HTML 요소
  const [selected, setSelected] = useState(null); // 선택된 맛집

  const initMap = () => {
    // 지도 초기화 (서울 중심 좌표)
    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(37.5665, 126.9780),
      zoom: 13,
    });

    // 맛집 데이터 순회하며 마커 생성 (Python의 for loop와 동일)
    restaurants.forEach((restaurant) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(restaurant.lat, restaurant.lng),
        map: map,
        title: restaurant.name,
        icon: {
          content: `<div style="
            background:#FF6B35; color:white; 
            border-radius:50%; width:36px; height:36px;
            display:flex; align-items:center; justify-content:center;
            font-size:18px; box-shadow:0 2px 8px rgba(0,0,0,0.3);
            cursor:pointer;">🍽</div>`,
          anchor: new naver.maps.Point(18, 18),
        },
      });

      // 마커 클릭 시 팝업 표시
      naver.maps.Event.addListener(marker, "click", () => {
        setSelected(restaurant);
      });
    });
  };

  return (
    <div className="relative w-full h-screen">
      {/* 네이버 지도 SDK 로드 */}
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onLoad={initMap}
      />

      {/* 지도가 그려질 영역 */}
      <div ref={mapRef} className="w-full h-full" />

      {/* 맛집 선택 시 팝업 카드 */}
      {selected && (
        <RestaurantCard
          restaurant={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}