import React from 'react'
import '@testing-library/jest-dom';

import {shallow} from 'enzyme'
import CounterApp from '../CounterApp';


describe('Pruebas en el componente <CounterApp />', () => {
    
    let wrapper = shallow(<CounterApp />);

    beforeEach( () =>  {
        wrapper = shallow(<CounterApp />);

    })
    
    test('debe de mostrar el <CounterApp /> correctamente', () => {
       
       expect( wrapper ).toMatchSnapshot();
    });
    test('debe de mostrar el valor enviado por props', () => {

        const value = 100;
        const wrapper = shallow(
        <CounterApp 
          value={value}            
        />);
        // con este find busco la etiqueta u objeto dentro del html del componente
        const textoParrafo = wrapper.find('h2').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe("100")

    });


    test('debe aumentar al click', () => {
        wrapper.find('button').at(0).simulate('click');
        const textoParrafo = wrapper.find('h2').text();

        expect(textoParrafo).toBe('13');

    });

    test('debe disminuir al click', () => {
        wrapper.find('button').at(2).simulate('click');
        const textoParrafo = wrapper.find('h2').text();

        expect(textoParrafo).toBe('11');

    });

    test('debe de colocar el valor por defectocon btn reset', () => {
        
        const wrapper = shallow( <CounterApp value={15} /> );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const textoParrafo = wrapper.find('h2').text();

        expect(textoParrafo).toBe("15"); 

    });
    
    
    

});
