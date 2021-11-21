import {heroes} from '../data/heroes'


export const GetHeroByPublisher = (publisher) => {
    

    const valid = ['DC Comics', 'Marvel Comics'];

    if (!valid.includes( publisher )) {
        throw new Error( `${ publisher } is not a valid publisher`)  
    };

    return heroes.filter(hero => hero.publisher === publisher);

}
