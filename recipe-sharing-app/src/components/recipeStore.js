import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  // Track which recipe is being edited
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const startEditing = (recipe) => {
    setEditingId(recipe.id);
    setTitle(recipe.title);
    setDescription(recipe.description);
  };

  const saveEdit = () => {
    updateRecipe(editingId, { title, description });
    setEditingId(null);
    setTitle('');
    setDescription('');
  };

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          {editingId === recipe.id ? (
            <div>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => startEditing(recipe)}>Edit</button>
              <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
