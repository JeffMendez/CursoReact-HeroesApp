import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Heroes
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                className={({isActive}) => ` nav-link ${isActive ? 'active': ''}`}
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink 
                                className={({isActive}) => `nav-item nav-link ${isActive ? 'active': ''}`}
                                to="/dc"
                            >
                                DC
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex ms-auto">
                        <span className='nav-item nav-link text-primary me-3' style={{ marginTop: '1px' }}>
                            Jeffry Mendez
                        </span>
                        <button 
                            className='nav-item nav-link btn'
                            onClick={onLogout}
                            style={{ color: 'white' }}
                            >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}