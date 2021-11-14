import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';



describe('Pruebas en funciones de heroes', () => {
    

    test('debe de retornar un heroe por id', () => {
       
        const id = 1;
        const heroe = getHeroeById( id );

        const heroData = heroes.find(h => h.id===id);

        expect( heroe ).toEqual(heroData)

    });

    test('debe de retornar undefined si hero no existe', () => {
       
        const id = 10;
        const heroe = getHeroeById( id );


        expect( heroe ).toBe(undefined)

    });


    test('debe retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';


        const heros = getHeroesByOwner(owner);


        const dataTest = heroes.filter( h=> h.owner === owner );

        expect( heros ).toEqual(dataTest);

    });

    
    test('debe retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';


        const heros = getHeroesByOwner(owner);


        

        expect( heros.length ).toBe(2);

    });
   
    
    


});
