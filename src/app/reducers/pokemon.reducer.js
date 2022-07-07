import { typesPokemon } from "../types/types";

export const pokemonReducer = (state = [], action) => {
    switch (action.type) {
        case typesPokemon.getPokemon:
            return action.payload;

        case typesPokemon.deletePokemon:
            return state.filter(pokemon => pokemon.id !== action.payload.id);

        case typesPokemon.addPokemon:
            return [...state, action.payload];
            
        case typesPokemon.updatePokemon:
            return state.map(pokemon => {
                if (pokemon.id == action.payload.id) {
                    return action.payload;
                }
                return pokemon;
            });
        default:
            return state;
    }
}