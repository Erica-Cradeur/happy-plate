// src/components/RecipeDetail.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styling/RecipeDetail.css'; // Create this CSS file for styling the detail view

const RecipeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe; // Get recipe data passed via Link

  if (!recipe) {
    // If no recipe is passed, go back to the homepage
    navigate('/');
    return null;
  }

  return (
    <div className="recipe-detail">
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="detail-image" />
      <div className="recipe-info">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
