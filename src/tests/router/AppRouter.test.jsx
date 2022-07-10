import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../router/AppRouter";

describe('Testing in AppRouter', () => { 
    
    test('should show login if is not authenticated', () => { 
        const contextValue = { logged: false }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByText('Hero App')).toBeTruthy();
        expect(screen.getByText('Ingresar')).toBeTruthy();
    })

    test('should show marvel if is authenticated', () => { 
        const contextValue = { logged: true }
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByText('Marvel Comics')).toBeTruthy();
    })
})