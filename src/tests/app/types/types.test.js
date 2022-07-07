import { typesLogin, typesUser, typesPokemon } from '../../../app/types/types';
describe('Types tests', () => {
    test('TypesLogin', () => {
        expect(typesLogin).toEqual({
            login: 'login',
            logout: 'logout',
            typeUser: 'admin',
            register: 'register',
        });
    }
    );
    test('TypesUser', () => {
        expect(typesUser).toEqual({
            getUser: 'getUser',
        });
    }
    );
    test('TypesPokemon', () => {
        expect(typesPokemon).toEqual({
            getPokemon: 'getPokemon',
            deletePokemon: 'deletePokemon',
            addPokemon: 'addPokemon',
            updatePokemon: 'updatePokemon',
        });
    }
    );
})