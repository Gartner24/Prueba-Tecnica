import { typesUser } from "../types/types"

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case typesUser.getUser:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}