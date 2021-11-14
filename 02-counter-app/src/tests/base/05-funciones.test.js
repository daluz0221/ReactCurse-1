import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';


describe('Pruebas en 05-funciones', () => {
    

    test('debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest )

    });
    

    test('debería retornar un objeto con el username pasado por argument', () => {
        
        const nombre = 'Noelle';

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const saludo = getUsuarioActivo(nombre);


        expect( saludo ).toEqual( userTest );


    });
    


});
