import { typesLogin } from "../types/types"

export const loginReducers = (state = {}, action) => {
    switch (action.type) {
        case typesLogin.login:
            return {
                email: action.payload.email,
                password: action.payload.password,
            }
        case typesLogin.logout:
            return {}
        case typesLogin.typeUser:
            return {
                typeUser: action.payload.typeUser,
            }
        case typesLogin.register:
            return {
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
                phone: action.payload.phone,
            }
        default:
            return state
    }
}