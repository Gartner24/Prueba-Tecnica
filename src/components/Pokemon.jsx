import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pokemonsData = useSelector((state) => state.pokemon);
  const params = useParams();
  const pokemon = pokemonsData.find((pokemon) => pokemon.name === params.name);

  const validatePokemons = () => {
    if (pokemonsData.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    validatePokemons();
  }, [pokemonsData]);

  if (isLoading) {
    return (
      <div className="auth">
        <span>Loading...</span>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <main>
      <div key={pokemon.id} className="single-pokemon-card">
        <div className="single-main-image">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
          />
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",            
          }}
        >
          <div className="single-stats">
            <h2>{pokemon.name}</h2>
            Type:<b> {pokemon.types.map((type) => type.type.name)}</b>
            <span>
              <p>
                <b>{pokemon.stats[0].base_stat}</b> Hp -
                <b> {pokemon.base_experience}</b> Exp
                <br />
                <b> {pokemon.weight}</b> Kg -
                <b> {pokemon.height}</b> M
              </p>
            </span>
          </div>
          <div className="single-data">
            <div className="single-subdata">
              <h3>{pokemon.stats[1].base_stat}</h3>
              <span>Ataque</span>
            </div>
            <div className="single-subdata">
              <h3>{pokemon.stats[3].base_stat}</h3>
              <span>Ataque especial</span>
            </div>
            <div className="single-subdata">
              <h3>{pokemon.stats[2].base_stat}</h3>
              <span>Defensa</span>
            </div>
            <div className="single-subdata">
              <h3>{pokemon.stats[4].base_stat}</h3>
              <span>Defensa especial</span>
            </div>
            <div className="single-subdata">
              <h3>{pokemon.stats[5].base_stat}</h3>
              <span>Velocidad</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pokemon;
