"use client";

import CatCard from "@/components/common/CatCard";
import { useCatStore } from "@/store/catStore";

export default function FavoritePage() {
  const { favoriteCats, toggleFavorite } = useCatStore();

  if (!favoriteCats || favoriteCats.length === 0) {
    return (
      <div className="flex justify-center">
        <p>즐겨찾기한 고양이가 없습니다.</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {favoriteCats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </section>
  );
}
