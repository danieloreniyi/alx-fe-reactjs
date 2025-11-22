import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],          // User's favorite recipe IDs
  recommendations: [],    // Personalized recommendations

  // Set search keyword
  setSearchTerm: (term) =>
    set(() => ({
      searchTerm: term,
    })),

  // Filter recipes based on search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Favorites actions
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate mock recommendations
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Recipe actions
  addRecipe: (recipe) =>
    set((state) => {
      const updated = [...state.recipes, recipe];
      return { recipes: updated, filteredRecipes: updated };
    }),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? updatedRecipe : r
      );
      return { recipes: updated, filteredRecipes: updated };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return { recipes: updated, filteredRecipes: updated };
    }),
}));
