import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"
import { Footer } from "./ui/components/Footer"

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
