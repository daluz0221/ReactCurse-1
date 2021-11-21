import {heroes} from '../data/heroes'
 
export const GetHeroByName = (name = '') => {

    console.log('oli');
    if (name === '') {
        return []
    }
  
    name = name.toLowerCase();

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));


};
