interface Restaurant {
  id: number;
  name: string;
  category: string;
  address: string;
  lat: number;
  lng: number;
  rating: number;
  description: string;
}

interface Props {
  restaurant: Restaurant;
  onClose: () => void;
}

export default function RestaurantCard({ restaurant, onClose }: Props) {
  const categoryEmoji: { [key: string]: string } = {
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
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400
                   hover:text-gray-700 text-lg leading-none"
      >
        ✕
      </button>
      <span className="inline-block text-xs bg-orange-100 text-orange-600
                       px-2 py-1 rounded-full font-medium">
        {categoryEmoji[restaurant.category] || "🍽"} {restaurant.category}
      </span>
      <h2 className="text-lg font-bold mt-2 text-gray-900">
        {restaurant.name}
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        ⭐ {restaurant.rating} · {restaurant.address}
      </p>
      <p className="text-sm text-gray-600 mt-3 leading-relaxed">
        {restaurant.description}
      </p>
    </div>
  );
}
