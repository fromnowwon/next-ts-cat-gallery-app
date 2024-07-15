"use client";

import CatCard from "@/components/common/CatCard";
import { useCatStore } from "@/store/catStore";
import Masonry from "react-masonry-css";

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
    <section className="container mx-auto py-6">
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          900: 3,
          750: 2,
          350: 1,
        }}
        className="flex gap-4"
        columnClassName="masonry-grid_column"
      >
        {favoriteCats.map((cat, index) => (
          <CatCard key={cat.id} cat={cat} index={index} />
        ))}
      </Masonry>
    </section>
  );
}
