import React from 'react'
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';
import {shallow} from 'enzyme'

describe('Pruebas en componente <PrimeraApp>', () => {
    
    
    // test('debe mostrar el mensaje "Hola noelle"', () => {
       
    //     const saludo = 'Hola noelle';

    //     const {getByText} = render( <PrimeraApp saludos={saludo}/> )

    //     expect(getByText(saludo)).toBeInTheDocument();

    // });
    

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola noelle';
        const wrapper = shallow(<PrimeraApp saludos={saludo}/>);

        expect( wrapper ).toMatchSnapshot();

    });
    

    test('debe de mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola noelle';
        const subtitulo = 'Quiero ser tu amigo';
        const wrapper = shallow(
        <PrimeraApp 
            saludos={saludo}
            subtitle={subtitulo}
            
        />);
        // con este find busco la etiqueta u objeto dentro del html del componente
        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo)

    });
    

});
