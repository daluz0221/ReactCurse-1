import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-strings', () => {


    test('Prueba en el método getSaludo, debe retornar hola Luis', () => {

        const nombre = 'Luis';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe('Hola ' + nombre)

    });

    test('getSaludo debe retornar Hola noelle si no recibe argumentos', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola noelle' )

    })
    
    



});