import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import GifGrid from '../components/GifGrid';

describe('Pruebas en el componente <GifGrid />', () => {
    
    const wrapper = shallow(<GifGrid />);

    beforeEach(()=>{
        const wrapper = shallow(<GifGrid />);

    });

    test('Debe crear el componente y contrastarlo con el snapshot', () => {
       
        expect(wrapper).toMatchSnapshot();

    });
    

});
