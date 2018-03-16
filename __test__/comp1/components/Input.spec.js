import * as React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../../../ClientApp/modules/comp1/components/Input';

configure({ adapter: new Adapter() });

describe('Test Comp1 Input', () => {
    let ShallowComponent;

    beforeEach(()=>{
        ShallowComponent = shallow(<Input />);
    })

    it('+++ render dump components', () => {
        expect(ShallowComponent.length).toBe(1);
    });

});
