import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchRecipe } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = () => {
    setSearchRecipe(inputRef.current.value);
  };
  const inputRef = useRef(null);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Search For Your Favorite Food Recipe</p>
      <input
        ref={inputRef}
        onChange={handleInput}
        type="text"
        className="input"
        placeholder="Search Recipe..."
      />
    </form>
  );
};

export default SearchForm;
