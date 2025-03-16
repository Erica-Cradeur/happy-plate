// src/components/RecipeCard.js
import React from 'react';
import '../styling/RecipeCard.css';

const RecipeCard = ({ title, image, description }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default RecipeCard;
