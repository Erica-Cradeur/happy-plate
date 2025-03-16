import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import AddRecipeForm from './AddRecipeForm';
import '../styling/HomePage.css';

const HomePage = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Grilled Chicken with Zucchini',
      image: 'https://via.placeholder.com/200',
      description: 'A healthy grilled chicken dish with roasted zucchini.',
      ingredients: ['Chicken', 'Zucchini', 'Olive Oil', 'Salt', 'Pepper'],
      instructions: 'Grill the chicken, roast the zucchini, and combine with seasonings.',
    },
    {
      id: 2,
      title: 'Salmon Bowl with Quinoa',
      image: 'https://via.placeholder.com/200',
      description: 'A flavorful salmon bowl served with quinoa.',
      ingredients: ['Salmon', 'Quinoa', 'Avocado', 'Lime', 'Cilantro'],
      instructions: 'Cook the quinoa, grill the salmon, and assemble with fresh toppings.',
    },
  ]);

  // Define the modal state here
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
    setIsFormOpen(false); // Close modal after adding
  };

  return (
    <div className="homepage">
      <h1>Meal Prep Recipes</h1>

      {/* Plus Button to Open the Modal */}
      <button className="add-recipe-button" onClick={() => setIsFormOpen(true)}>
        +
      </button>

      {/* Modal */}
      {isFormOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setIsFormOpen(false)}>
              X
            </button>
            <AddRecipeForm addRecipe={addRecipe} />
          </div>
        </div>
      )}

      <div className="recipe-cards-container">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            state={{ recipe }}
            key={recipe.id}
            className="recipe-link"
          >
            <RecipeCard
              title={recipe.title}
              image={recipe.image}
              description={recipe.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
