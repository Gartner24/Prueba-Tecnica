import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { facebook, google } from '../../firebase/firebaseConfig'
import { typesLogin } from '../types/types'

// ------------------------------------ Google Login Action ------------------------------------ //

export const GoogleLoginAction = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(() => {
                console.log("logged in successfully")
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

// ------------------------------------ Facebook Login Action ------------------------------------ //

export const FacebookLoginAction = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
            .then(() => {
                console.log("logged in successfully")
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

// ------------------------------------ Login Action ------------------------------------ //

export const LoginActionSync = (email, password) => {
    return {
        type: typesLogin.login,
        payload: {
            email,
            password
        }
    }
}

export const LoginActionAsync = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                dispatch(LoginActionSync(email, password))
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

// ------------------------------------ Logout Action ------------------------------------ //

export const logoutActionSync = () => {
    return {
        type: typesLogin.logout
    }
}

export const logoutActionAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                dispatch(logoutActionSync())
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

// ------------------------------------ Register Action ------------------------------------ //


export const registerSyncAction = (email, password, name, phone) => {
    return {
        type: typesLogin.register,
        payload: {
            email, password, name, phone
        }
    }
}

export const registerAsyncAction = (email, password, name, phone) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name }, { phoneNumber: phone })
                dispatch(registerSyncAction(name, email, password, phone))
            })
            .catch(error => {
                console.warn(error)
            })
    }
}
