import { create } from 'zustand';

const useFavoritesStore = create((set) => ({
  favorites: [],
  addToFavorites: (product) => 
    set((state) => ({
      favorites: [...state.favorites, product],
    })),
  removeFromFavorites: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== productId),
    })),
  isFavorite: (productId) => 
    useFavoritesStore.getState().favorites.some((item) => item.id === productId),
}));

export default useFavoritesStore;