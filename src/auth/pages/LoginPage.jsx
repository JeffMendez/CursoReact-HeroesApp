import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

    const { login } = useContext(AuthContext)
    const navigate = useNavigate();

    const onLogin = () => {
        login('Jeffry Mendez');

        const lastPath = localStorage.getItem('lastPath') || "/";

        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="text-center">
                                    <img src={`/assets/wolverine.ico`} />
                                    <small>Jeffry Mendez</small>
                                </div>
                            </div>
                            <div className="col">
                                <h1 className="mt-4">Hero App</h1>
                                <button
                                    className="btn btn-primary"
                                    onClick={onLogin}>
                                        Ingresar
                                </button>
                            </div>
                        </div>               
                    </div>
                </div>
            </div>
        </div>
    )
}
