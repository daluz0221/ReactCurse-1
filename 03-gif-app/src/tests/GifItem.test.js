import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
// import GifGrid from '../components/GifGrid';
import GifItem from '../components/GifItem';

describe('Pruebas en el componente <GifItem />', () => {
    
    
    const title = 'un titulo';
    const url = 'https://localhost/mialgo.jpg';
    const wrapper = shallow(<GifItem title={title} url={url} />);
   

    

    test('Debe crear el componente y contrastarlo con el snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });
    
    
    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p').text().trim();
        expect(p).toBe(title);
    });

    test('probando los props en la img', () => {
       
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('debo probar la clase del div animate__fadeinup', () => {
       
        const div = wrapper.find('div');

        expect(div.prop('className').split(' ')[2]).toBe('animate__fadeInUp');

    });
    
    
    

});
