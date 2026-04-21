// components/RestaurantCard.js
export default function RestaurantCard({ restaurant, onClose }) {
  const categoryEmoji = {
    "맥줏집": "🍺",
    "한식": "🍚",
    "카페": "☕",
    "중식": "🥢",
    "일식": "🍣",
  };

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                    bg-white rounded-2xl shadow-2xl p-5 w-80 z-10
                    border border-gray-100">

      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400
                   hover:text-gray-700 text-lg leading-none"
      >
        ✕
      </button>

      {/* 카테고리 뱃지 */}
      <span className="inline-block text-xs bg-orange-100 text-orange-600
                       px-2 py-1 rounded-full font-medium">
        {categoryEmoji[restaurant.category] || "🍽"} {restaurant.category}
      </span>

      {/* 맛집 이름 */}
      <h2 className="text-lg font-bold mt-2 text-gray-900">
        {restaurant.name}
      </h2>

      {/* 별점 + 주소 */}
      <p className="text-sm text-gray-500 mt-1">
        ⭐ {restaurant.rating} · {restaurant.address}
      </p>

      {/* 설명 */}
      <p className="text-sm text-gray-600 mt-3 leading-relaxed">
        {restaurant.description}
      </p>
    </div>
  );
}