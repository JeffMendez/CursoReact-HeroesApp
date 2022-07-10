import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../auth";
import { PrivateRoute } from "../../router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Testing in PrivateRoute', () => { 

    test('should show children if is authenticated', () => { 
        Storage.prototype.setItem = jest.fn();
        const contextValue = {logged: true, user: 'Jeff'}
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
        expect(screen.getByText('Ruta privada')).toBeTruthy();
    })
})