"use client";

import { useCatStore } from "@/store/catStore";
import { useEffect } from "react";
import CatCard from "../common/CatCard";

export default function Gallery() {
  const { cats, fetchCats } = useCatStore();

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  if (!cats || cats.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </section>
  );
}
