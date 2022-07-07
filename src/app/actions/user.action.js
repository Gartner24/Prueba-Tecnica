import { typesUser } from "../types/types"

export const getUserAction = (user) => {
    return {
        type: typesUser.getUser,
        payload: user,
    }
}