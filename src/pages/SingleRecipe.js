import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const SingleRecipe = () => {
  const { id } = useParams();
  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=a437c6ff&app_key=ab7abdbddd6a6e7edb458add90713f92`;
  const [isLoading, setIsLoading] = useState(true);
  const [singleRecipe, setSingleRecipe] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        const recipe = jsonResponse.recipe;
        setSingleRecipe(recipe);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  const returnValue = (item) => {
    if (item) return item[0];
  };

  if (isLoading) {
    return (
      <article>
        <Loading />
      </article>
    );
  } else {
    const {
      label,
      image,
      cuisineType,
      dietLabels,
      mealType,
      dishType,
      ingredientLines,
      ingredients,
    } = singleRecipe;
    return (
      <article className="single-recipe">
        <div className="main-recipe">
          <img src={image} alt={label} />
          <div className="recipe-desc">
            <h1>{label}</h1>
            <h3>
              Cuisine Type: <span>{returnValue(cuisineType) || "italian"}</span>
            </h3>
            <h3>
              Diet Labels:{" "}
              <span>{returnValue(dietLabels) || "High-Fiber"}</span>
            </h3>
            <h3>
              Meal Type: <span>{returnValue(mealType) || "lunch/dinner"}</span>
            </h3>
            <h3>
              Dish Type: <span>{returnValue(dishType) || "main course"}</span>
            </h3>
          </div>
        </div>
        <div className="ingredient-line">
          <h1>Ingredients: </h1>
          {ingredientLines.map((ingredient, index) => {
            return <p key={index}> &bull; {ingredient}</p>;
          })}
        </div>
        <div className="ingredients">
          <h1>Ingredient Description: </h1>
          <section>
            {ingredients.map((item, index) => {
              const { text, quantity, measure, image, foodCategory } = item;
              return (
                <div key={index} className="ingredient">
                  <img
                    src={
                      image ||
                      "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    }
                    alt={text}
                  />
                  <div className="text">
                    <h3>{text}</h3>
                    <p>Food Category: {foodCategory}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Measurement: {measure}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </article>
    );
  }
};

export default SingleRecipe;
