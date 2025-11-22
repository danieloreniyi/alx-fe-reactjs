import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

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

  // Existing recipe actions (keep yours)
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
