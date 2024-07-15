import { fetchCats } from "@/lib/api";
import { Cat } from "@/types/CatTypes";
import { create } from "zustand";

interface CatState {
  cats: Cat[];
  fetchCats: () => void;
}

export const useCatStore = create<CatState>((set) => ({
  cats: [],
  fetchCats: async () => {
    const catsData = await fetchCats();
    set({ cats: catsData });
  },
}));
