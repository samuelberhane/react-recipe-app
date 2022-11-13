import React from "react";
import SearchForm from "../components/SearchForm";
import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <section className="home">
      <SearchForm />
      <Recipes />
    </section>
  );
};

export default Home;
