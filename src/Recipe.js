import React from "react";
import style from './recipe.module.css'

const Recipe = ({ title, calories, image,ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>Title: {title}</h1>
      <ol className={style.recipe}>
          {ingredients.map((ingredient,i) => (<li key={i} >  {ingredient.text}</li>))}
      </ol>
      <p className={style.recipe}>Calories: {calories}</p>
      <img className={style.recipe} src={image} alt="" />
    </div>
  );
};

export default Recipe;
