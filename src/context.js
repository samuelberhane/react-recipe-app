import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchRecipe, setSearchRecipe] = useState("b");
  const [recipeList, setRecipeList] = useState([]);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchRecipe}&app_id=a437c6ff&app_key=ab7abdbddd6a6e7edb458add90713f92`;

  const fetchDate = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      const recipes = jsonResponse;
      if (recipes) {
        const newRecipe = recipes.hits.map((item) => {
          const { recipe } = item;
          return {
            urlId: recipe.uri,
            name: recipe.label,
            image: recipe.image,
            mealType: recipe.mealType,
          };
        });
        setRecipeList(newRecipe);
        setIsLoading(false);
      } else {
        setRecipeList([]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDate(url);
  }, [searchRecipe]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        searchRecipe,
        setSearchRecipe,
        recipeList,
        setRecipeList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
