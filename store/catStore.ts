import { fetchCats } from "@/lib/api";
import { Cat } from "@/types/CatTypes";
import { create } from "zustand";

interface CatState {
  page: number;
  isLoading: boolean;
  cats: Cat[];
  favoriteCats: Cat[];
  fetchCats: (page: number) => void;
  loadMoreCats: () => void;
  toggleFavorite: (cat: Cat) => void;
}

export const useCatStore = create<CatState>((set) => ({
  page: 1,
  isLoading: false,
  cats: [],
  favoriteCats: [],
  fetchCats: async (page: number) => {
    set({ isLoading: true });

    const catsData = await fetchCats(page);

    set((state) => ({
      cats: [...state.cats, ...catsData],
      page,
      isLoading: false,
    }));
  },
  loadMoreCats: () => {
    set((state) => ({ page: state.page + 1 }));
  },
  toggleFavorite: (cat) => {
    set((state) => {
      const isFavorite = state.favoriteCats.some((fav) => fav.id === cat.id);

      return {
        favoriteCats: isFavorite
          ? state.favoriteCats.filter((fav) => fav.id !== cat.id)
          : [...state.favoriteCats, cat],
      };
    });
  },
}));
