import { loginReducers } from "../../../app/reducers/login.reducers";

describe('Login reducers tests', () => {
    test('Login reducers', () => {
        expect(loginReducers({}, {
            type: 'login',
            payload: {
                email: 'santiagovalencialeon@gmail.com',
                password: '123456'
            }
        })

        ).toEqual({
            email: 'santiagovalencialeon@gmail.com',
            password: '123456',
        });
    }
    );
    test('Logout reducers', () => {
        expect(loginReducers({}, {
            type: 'logout', payload: {
                email: 'santiagovalencialeon@gmail.com',
                password: '123456'
            }
        })
        ).toEqual({})
    }
    );
    test('Register reducers', () => {
        expect(loginReducers({}, {
            type: 'register',
            payload: {
                email: 'santiagovalencialeon@gmail.com',
                password: '123456',
                name: 'Santiago',
                phone: '123456789',
            }
        })
        ).toEqual({
            email: 'santiagovalencialeon@gmail.com',
            password: '123456',
            name: 'Santiago',
            phone: '123456789',
        });
    })
})