import { fetchCats } from "@/lib/api";
import { Cat } from "@/types/CatTypes";
import { create } from "zustand";

interface CatState {
  cats: Cat[];
  favoriteCats: Cat[];
  fetchCats: () => void;
  toggleFavorite: (cat: Cat) => void;
}

export const useCatStore = create<CatState>((set) => ({
  cats: [],
  favoriteCats: [],
  fetchCats: async () => {
    const catsData = await fetchCats();
    set({ cats: catsData });
  },
  toggleFavorite: (cat) =>
    set((state) => {
      const isFavorite = state.favoriteCats.some((fav) => fav.id === cat.id);

      return {
        favoriteCats: isFavorite
          ? state.favoriteCats.filter((fav) => fav.id !== cat.id)
          : [...state.favoriteCats, cat],
      };
    }),
}));
