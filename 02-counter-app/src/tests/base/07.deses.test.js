import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('Pruebas del archivo 07-deses.js del ensayo', () => {
   
    test('debe retornar un string y un numero', () => {
       
        const [letras, numeros] = retornaArreglo();

        // expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        // expect(arr).toEqual(['ABC', 123]);
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
        
    });
    

});
