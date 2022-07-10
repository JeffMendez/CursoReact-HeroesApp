import { types } from "../../../auth/types/types"

describe('Testing in types', () => { 
    
    test('should return types', () => { 
        expect(types).toEqual({
            login:  '[Auth] Login',
            logout: '[Auth] Logout',
        });
    })
})