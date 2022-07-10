import { authReducer } from "../../../auth/context/authReducer"
import { types } from "../../../auth/types/types";

describe('Testing in authReducer', () => {

    const defaultAuth = {
        logged: false,
        user: null
    }

    const defaultLogin = {
        logged: true,
        user: 'Jeff'
    }

    test('should return default value', () => { 
        const stateDefault = authReducer(defaultAuth, '');
        expect(defaultAuth).toEqual(stateDefault)
    });

    test('should call login to auth and set user', () => { 
        const action = {
            type: types.login,
            payload: 'Jeff'
        }

        const stateLogin = authReducer(defaultAuth, action)
        expect(stateLogin.logged).toBeTruthy();
        expect(stateLogin.user).toBe('Jeff')
    });

    test('should call logout and put null user and false logged', () => { 
        const action = {
            type: types.logout
        }

        const stateLogin = authReducer(defaultLogin, action)
        expect(stateLogin.logged).toBeFalsy();
        expect(stateLogin.user).toBe(null)
    });


})