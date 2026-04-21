// app/page.tsx
import NaverMap from "@/components/NaverMap";

export default function Home() {
  return (
    <main className="relative">
      <header className="absolute top-0 left-0 right-0 z-10
                         bg-white/90 backdrop-blur-sm px-6 py-3
                         flex items-center gap-2 shadow-sm">
        <span className="text-xl">🍽</span>
        <h1 className="text-lg font-bold text-orange-500">맛집지도</h1>
        <span className="text-sm text-gray-400 ml-1">서울 맛집 모음</span>
      </header>
      <NaverMap />
    </main>
  );
}