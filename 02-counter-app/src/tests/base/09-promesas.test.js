import '@testing-library/jest-dom';

import {getHeroeByIdAsync} from '../../base-pruebas/09-promesas'
import heroes from '../../data/heroes';


describe('Pruebas del archivo 09-promesas.js', () => {
   
    
    test('debe retornar un heroeAsync', (done) => {
    
        const id = 1;

        getHeroeByIdAsync(id)
        .then( hero => {
            expect(hero).toBe(heroes[0]);
            done()
        } );

    });

    test('debe de retirnar un error si el id de heroe no existe', (done) => {
       
        const id = 10;

        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done()
        });

    });
    
    


});
