"use client";

import { useCatStore } from "@/store/catStore";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
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
    <section className="container mx-auto py-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {cats.map((cat, index: number) => (
        <CatCard key={`${cat.id}-${index}`} cat={cat} />
      ))}
      <div className="col-span-full">
        {isLoading ? (
          <Loader size={{ width: 90, height: 90 }} />
        ) : (
          <div ref={ref} className="h-0" />
        )}
      </div>
    </section>
  );
}
