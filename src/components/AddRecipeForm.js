// src/components/AddRecipeForm.js
import React, { useState } from 'react';
import '../styling/AddRecipeForm.css';

const AddRecipeForm = ({ addRecipe }) => {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    image: '',
    description: '',
    ingredients: [],
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({
      ...newRecipe,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For simplicity, splitting ingredients by commas (if provided)
    const ingredients = newRecipe.ingredients.split(',').map(item => item.trim());
    addRecipe({ ...newRecipe, ingredients });
    setNewRecipe({ title: '', image: '', description: '', ingredients: '', instructions: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form">
      <h2>Add New Recipe</h2>
      <input
        type="text"
        name="title"
        placeholder="Recipe Title"
        value={newRecipe.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={newRecipe.image}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={newRecipe.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="ingredients"
        placeholder="Ingredients (comma separated)"
        value={newRecipe.ingredients}
        onChange={handleChange}
      />
      <textarea
        name="instructions"
        placeholder="Instructions"
        value={newRecipe.instructions}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
