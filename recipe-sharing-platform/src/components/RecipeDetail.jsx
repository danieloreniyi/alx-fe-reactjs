import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Recipe not found</p>;

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-h-96 object-cover rounded mb-6"
        />
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p className="mb-4">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {(recipe.ingredients || ["1 cup ingredient example", "2 tbsp ingredient example"]).map(
            (item, idx) => (
              <li key={idx}>{item}</li>
            )
          )}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {(recipe.instructions || ["Step 1 example", "Step 2 example"]).map(
            (step, idx) => (
              <li key={idx} className="mb-2">{step}</li>
            )
          )}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
