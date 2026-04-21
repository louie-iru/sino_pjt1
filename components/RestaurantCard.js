// components/RestaurantCard.js
export default function RestaurantCard({ restaurant, onClose }) {
  return (
    // 지도 위에 떠있는 카드 (Tailwind CSS 클래스로 스타일링)
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 
                    bg-white rounded-2xl shadow-2xl p-5 w-80 z-10">
      
      {/* 닫기 버튼 */}
      <button onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-700">
        ✕
      </button>

      {/* 카테고리 뱃지 */}
      <span className="text-xs bg-orange-100 text-orange-600 
                       px-2 py-1 rounded-full">
        {restaurant.category}
      </span>

      {/* 맛집 이름 */}
      <h2 className="text-lg font-bold mt-2 text-gray-900">
        {restaurant.name}
      </h2>

      {/* 별점 */}
      <p className="text-yellow-500 text-sm mt-1">
        ⭐ {restaurant.rating} · {restaurant.address}
      </p>

      {/* 설명 */}
      <p className="text-gray-500 text-sm mt-2">
        {restaurant.description}
      </p>
    </div>
  );
}