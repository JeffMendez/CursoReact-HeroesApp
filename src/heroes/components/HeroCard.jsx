import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

export const HeroCard = (
    {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    }
) => {

    const heroURL = `/assets/heroes/${id}.jpg`

    const [hover, setHover] = useState(false)
    const navigate = useNavigate();
    
    const pageHero = () => {
        navigate(`/hero/${id}`)
    }

    return (
        <div className="col d-flex justify-content-center">
            <div 
                className="card-hero" 
                style={{ backgroundImage: `url(${heroURL})` }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={pageHero}
                >    
                {
                    hover && (
                        <div 
                            className="card-body-hero animate__animated animate__fadeInUp animate__faster"
                            >
                            <h1 className="card-title">{superhero}</h1>
                            <p className="card-title">{alter_ego}</p>
                            <p className="card-text">
                                <small>{first_appearance}</small>
                            </p>
                            {/* <Link to={`/hero/${id}`}>
                                Más...
                            </Link> */}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
