import ColorThief from 'colorthief';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";

export const HeroPage = () => {

    const { id } = useParams();

    const hero = useMemo(() => getHeroesById(id), [id]);
    if ( !hero ) return <Navigate  to='/marvel' />

    const navigate = useNavigate();
    const onNavigateBack = () => {
        if (hero.publisher === 'Marvel Comics') navigate('/marvel')
        else navigate('/dc')
    }

    const refImg = useRef();
    const getColorAVG = () => {
        const colorThief = new ColorThief();
        const img = refImg.current;
        const dominant = colorThief.getColor(img, 25);
        const palette = colorThief.getPalette(img, 8);

        const primary = `rgb(${dominant[0]}, ${dominant[1]}, ${dominant[2]})`
        const sec = `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]})`

        document.documentElement.style.setProperty('--bg-text-hero', `-webkit-linear-gradient(${primary}, ${sec})`)
    }

    return (
        <div className="row mt-5 mb-5">
            <div className="col-4 animate__animated animate__pulse animate__faster">
                <img 
                    ref={refImg}
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail"
                    onLoad={getColorAVG}
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn animate__faster p-4">
                
                <div 
                    className='hero-title'>
                    <h1>{hero.superhero}</h1>
                </div>

                <ul className="list-group list-group-flush col-8 rounded">
                    <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego }</li>
                    <li className="list-group-item"><b>Publisher:</b> { hero.publisher }</li>
                    <li className="list-group-item"><b>First appearance:</b> { hero.first_appearance }</li>
                </ul>
                

                <h4 className="mt-3"><b>Characters</b></h4>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}>
                        Regresar
                </button>
            </div>
        </div>
    )
}
