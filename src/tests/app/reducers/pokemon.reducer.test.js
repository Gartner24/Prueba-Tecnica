import { pokemonReducer } from "../../../app/reducers/pokemon.reducer";
import { typesPokemon } from "../../../app/types/types";

describe('Pokemon reducers tests', () => {
    test('get pokemon reducer', () => {
        expect(pokemonReducer([], {
            type: typesPokemon.getPokemon,
            payload: [{
                name: 'Pikachu',
                type: 'Electric',
                description: 'Pikachu is a mouse pokemon',
                image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
            }]
        })).toEqual([{
            name: 'Pikachu',
            type: 'Electric',
            description: 'Pikachu is a mouse pokemon',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
        }]);
    })
    test('delete pokemon reducer', () => {
        expect(pokemonReducer([
            {
                id: 1,
                name: 'Pikachu',
                type: 'Electric',
                description: 'Pikachu is a mouse pokemon',
                image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
            }
        ], {
            type: typesPokemon.deletePokemon,
            payload: {
                id: 1,
                name: 'Pikachu',
                type: 'Electric',
                description: 'Pikachu is a mouse pokemon',
                image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
            }
        })).toEqual([]);
    })
    test('add pokemon reducer', () => {
        expect(pokemonReducer([], {
            type: typesPokemon.addPokemon,
            payload: {
                name: 'Pikachu',
                type: 'Electric',
                description: 'Pikachu is a mouse pokemon',
                image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
            }
        })).toEqual([{
            name: 'Pikachu',
            type: 'Electric',
            description: 'Pikachu is a mouse pokemon',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
        }]);
    })
    test('update pokemon reducer', () => {
        const pokemons = [
            {
                id: 1,
                name: 'Pikachu',
                type: 'Electric',
                description: 'Pikachu is a charge pokemon',
                image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
            },
            {
                id: 2,
                name: 'Charmander',
                type: 'Fire',
                description: 'Charmander is a fire pokemon',
                image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
            }
        ];
        expect(pokemonReducer(pokemons, {
            type: typesPokemon.updatePokemon,
            payload: {
                id: 1,
                name: 'Pikachu',
                type: 'Electric',
                description: 'Pikachu is a mouse pokemon',
                image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
            }
        })).toEqual([
            {
                id: 1,
                name: 'Pikachu',
                type: 'Electric',
                description: 'Pikachu is a mouse pokemon',
                image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
            },
            {
                id: 2,
                name: 'Charmander',
                type: 'Fire',
                description: 'Charmander is a fire pokemon',
                image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
            }
        ]);
    }
    )
})