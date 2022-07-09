import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./";

export const HeroList = ({publisher}) => {
    
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-xs-1 g-3 animate__animated animate__fadeIn">
    
            {
                heroes.map(heroe => (
                    <HeroCard key={heroe.id} {...heroe} />
                ))
            }
        </div>
    )
}
