import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const Recipes = () => {
  const { recipeList, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <article>
        <Loading />
      </article>
    );
  }
  if (recipeList.length < 1) {
    return (
      <article>
        <h1 className="notfound">No Recipe Found</h1>
      </article>
    );
  }
  return (
    <article className="recipes">
      {recipeList.map((list) => {
        const { name, image, urlId } = list;
        const splitUrlId = urlId.split("_");
        const id = splitUrlId[1];
        return (
          <div className="recipe" key={id}>
            <img src={image} alt={name} className="recipe-img" />
            <h1 className="recipe-name">{name}</h1>
            <div className="details">
              <Link to={`/details/${id}`} className="detail">
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default Recipes;
