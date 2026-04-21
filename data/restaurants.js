// data/restaurants.js
// 처음엔 직접 입력한 JSON 데이터로 시작 (나중에 DB 연결)
export const restaurants = [
  {
    id: 1,
    name: "을지로 노가리 골목",
    category: "🍺 맥줏집",
    address: "서울 중구 을지로",
    lat: 37.5665,   // 위도 (pandas DataFrame의 컬럼처럼)
    lng: 126.9780,  // 경도
    rating: 4.5,
    image: "/images/nogari.jpg",
    description: "을지로 대표 안주 골목"
  },
  {
    id: 2,
    name: "광장시장 빈대떡",
    category: "🥞 한식",
    address: "서울 종로구 창경궁로",
    lat: 37.5698,
    lng: 126.9996,
    rating: 4.8,
    image: "/images/bindaetteok.jpg",
    description: "100년 전통 시장 맛집"
  }
  // ... 계속 추가
];