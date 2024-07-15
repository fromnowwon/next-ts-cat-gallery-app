"use client";

import CatCard from "@/components/common/CatCard";
import { useCatStore } from "@/store/catStore";

export default function FavoritePage() {
  const { favoriteCats, toggleFavorite } = useCatStore();

  if (favoriteCats && favoriteCats.length === 0) {
    return (
      <section className="flex justify-center container mx-auto py-6">
        <p>즐겨찾기한 고양이가 없습니다.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {favoriteCats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </section>
  );
}
