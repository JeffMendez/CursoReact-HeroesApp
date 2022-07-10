import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/context/AuthContext";
import { Navbar } from "../../../ui";

const mockedUseNavigate = jest.fn(); 

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Testing in Navbar', () => {  

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should show user name', () => { 
        const contextValue = { logged: true, user: 'Jeff' }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByText(contextValue.user)).toBeTruthy();
    })

    test('should call logout and navigate on click Logouts button', () => { 
        const contextValue = { logged: true, user: 'Jeff', logout: jest.fn() }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const btnLogout = screen.getByText('Logout')
        fireEvent.click(btnLogout)
        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace":true})
    })
})
