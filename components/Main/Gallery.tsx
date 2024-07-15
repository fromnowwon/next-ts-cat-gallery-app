"use client";

import { useCatStore } from "@/store/catStore";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Masonry from "react-masonry-css";
import CatCard from "../common/CatCard";
import Loader from "../common/Loader";

export default function Gallery() {
  const { ref, inView } = useInView();
  const { cats, fetchCats, loadMoreCats, page, isLoading } = useCatStore();

  useEffect(() => {
    fetchCats(1);
  }, [fetchCats]);

  useEffect(() => {
    if (inView) loadMoreCats();
  }, [inView, loadMoreCats]);

  useEffect(() => {
    console.log("page:", page);
    if (page > 1) {
      fetchCats(page);
    }
  }, [page, fetchCats]);

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
        {cats.map((cat, index: number) => (
          <CatCard key={`${cat.id}-${index}`} cat={cat} />
        ))}
      </Masonry>
      <div className="flex justify-center py-6">
        {isLoading ? (
          <Loader size={{ width: 90, height: 90 }} />
        ) : (
          <div ref={ref} className="h-0" />
        )}
      </div>
    </section>
  );
}
