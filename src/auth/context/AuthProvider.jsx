import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initAuth = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer( authReducer, {}, initAuth );

    const onLogin = (name = '') => {
        const action = {
            type: types.login,
            payload: name
        }

        document.documentElement.style.setProperty('--bg-current', "url(/assets/background-heroes.jpg)")
        localStorage.setItem('user', JSON.stringify(name));
        dispatch(action);
    }

    const onLogout = () => {
        const action = {
            type: types.logout
        }

        document.documentElement.style.setProperty('--bg-current', "url(/assets/comics-bg.jpg)")
        localStorage.removeItem('user');
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: onLogin,
            logout: onLogout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}
