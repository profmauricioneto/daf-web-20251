import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokemons from "./data";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pokemons.length);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemons[currentIndex]} />
      <button onClick={handleNext}>
        Show Next
      </button>
    </div>
  );
}

export default App;
