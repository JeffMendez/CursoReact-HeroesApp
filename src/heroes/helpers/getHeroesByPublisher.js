import { heroes } from "../data/Heroes"

export const getHeroesByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if ( !validPublisher.includes(publisher) ) { throw new Error("Not valid publisher") }

    return heroes.filter(heroe => heroe.publisher == publisher);
}

