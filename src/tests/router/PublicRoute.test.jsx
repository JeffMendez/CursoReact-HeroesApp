import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../auth"
import { PublicRoute } from "../../router/PublicRoute"
import { Routes, Route, MemoryRouter } from "react-router-dom";

describe('Testing in <PublicRoute />', () => { 
    
    test('should show children if is not authenticated', () => { 
        const contextValue = {logged: false}
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta publica')).toBeTruthy();
    })

    test('should use navigate to marvel if is authenticated', () => { 
        const contextValue = {logged: true, user: 'Jeff'}
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Ruta marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect(screen.getByText('Ruta marvel')).toBeTruthy();
    })


})