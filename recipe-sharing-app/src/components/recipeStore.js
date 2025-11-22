import { create } from 'zustand';
import { nanoid } from 'nanoid'; // for unique IDs

const useRecipeStore = create((set) => ({
  recipes: [],

  // Original ALX-required function
  addRecipe: ({ title, description }) =>
    set((state) => ({
      recipes: [...state.recipes, { id: nanoid(), title, description }],
    })),

  // New functions for detailed management
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Required by ALX
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
