import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p >Type: {pokemon.type}</p>
    </div>
  );
};

export default PokemonCard;
