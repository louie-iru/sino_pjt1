// components/NaverMap.tsx
"use client";

declare const naver: any;

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { restaurants } from "@/data/restaurants";
import RestaurantCard from "./RestaurantCard";

export default function NaverMap() {
  const mapRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapLoaded) return;

    // 지도 초기화 (서울 중심)
    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(37.5665, 126.9780),
      zoom: 13,
    });

    // 맛집 마커 생성
    restaurants.forEach((restaurant) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(restaurant.lat, restaurant.lng),
        map: map,
        title: restaurant.name,
        icon: {
          content: `
            <div style="
              background: #FF6B35;
              color: white;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 18px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              cursor: pointer;
              border: 2px solid white;
            ">🍽</div>
          `,
          anchor: new naver.maps.Point(20, 20),
        },
      });

      // 마커 클릭 → 팝업 표시
      naver.maps.Event.addListener(marker, "click", () => {
        setSelected(restaurant);
      });
    });
  }, [mapLoaded]);

  return (
    <div className="relative w-full h-screen">

      {/* 네이버 지도 SDK 로드 */}
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onLoad={() => setMapLoaded(true)}
        strategy="afterInteractive"
      />

      {/* 지도 영역 */}
      <div ref={mapRef} className="w-full h-full" />

      {/* 맛집 팝업 카드 */}
      {selected && (
        <RestaurantCard
          restaurant={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}