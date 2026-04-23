"use client";

declare const naver: any;

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { restaurants } from "@/data/restaurants";
import RestaurantCard from "./RestaurantCard";

export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapLoaded) return;

    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(37.5665, 126.9780),
      zoom: 13,
    });

    restaurants.forEach((restaurant: any) => {
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

      naver.maps.Event.addListener(marker, "click", () => {
        setSelected(restaurant);
      });
    });
  }, [mapLoaded]);

  return (
    <div className="relative w-full h-screen">
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onLoad={() => setMapLoaded(true)}
        strategy="afterInteractive"
      />
      <div ref={mapRef} className="w-full h-full" />
      {selected && (
        <RestaurantCard
          restaurant={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}