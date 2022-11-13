import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import SingleRecipe from "./pages/SingleRecipe";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<SingleRecipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;
