// src/components/recipeStore.js
import { create } from 'zustand';
import { nanoid } from 'nanoid';

const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: ({ title, description }) =>
    set((state) => ({
      recipes: [...state.recipes, { id: nanoid(), title, description }],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
