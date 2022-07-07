import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pokemonsData = useSelector((state) => state.pokemon);
  const navigate = useNavigate();

  const validatePokemons = () => {
    if (pokemonsData.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  const handleClick = (id, name) => {
    navigate(`/pokemon/${name}/${id}`);
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
    <>
      <main>
        {pokemonsData.map((pokemon) => {
          return (
            <div
              key={pokemon.id}
              className="pokemon-card card"
              onClick={() => handleClick(pokemon.id, pokemon.name)}
            >
              <div className="main-image">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
                <h2>{pokemon.name}</h2>
                <span>
                  <p>
                    <b>{pokemon.stats[0].base_stat}</b> Hp -
                    <b> {pokemon.base_experience}</b> Exp
                  </p>
                </span>
              </div>
              <div className="data">
                <div className="subdata">
                  <h3>{pokemon.stats[1].base_stat}</h3>
                  <span>Ataque</span>
                </div>
                <div className="subdata">
                  <h3>{pokemon.stats[3].base_stat}</h3>
                  <span>Ataque especial</span>
                </div>
                <div className="subdata">
                  <h3>{pokemon.stats[2].base_stat}</h3>
                  <span>Defensa</span>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Home;
