import { typesPokemon } from "../types/types";

export const getPokemonSync = (pokemons) => {
    return {
        type: typesPokemon.getPokemon,
        payload: pokemons,
    };
}
