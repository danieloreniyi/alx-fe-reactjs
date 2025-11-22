import useRecipeStore from '../store/recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((r, index) => (
          <li key={index}>{r.title}</li>
        ))}
      </ul>
    </div>
  );
}
