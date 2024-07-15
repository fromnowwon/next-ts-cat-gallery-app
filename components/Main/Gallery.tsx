"use client";

import { useCatStore } from "@/store/catStore";
import { useEffect } from "react";
import CatCard from "../common/CatCard";
import Loader from "../common/Loader";

export default function Gallery() {
  const { cats, fetchCats } = useCatStore();

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  if (!cats || cats.length === 0) {
    return <Loader size={{ width: 90, height: 90 }} />;
  }

  return (
    <section className="container mx-auto py-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </section>
  );
}
