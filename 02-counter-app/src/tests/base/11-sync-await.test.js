import '@testing-library/jest-dom';
import { getImagen } from '../../base-pruebas/11-async-await';


describe('Prueba con async-await y Fetch', () => {
    

    test('debe de retornar el url de la imagen', async () => {
        
        const url = await getImagen();

        expect(url.includes('https://')).toBe(true)

    });
    

});
