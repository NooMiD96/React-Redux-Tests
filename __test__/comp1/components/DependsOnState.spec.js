import * as React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DependsOnState from '../../../ClientApp/modules/comp1/components/DependsOnState';

configure({ adapter: new Adapter() });

describe('Test Comp1 DependsOnState', () => {
    let ShallowComponent;

    beforeEach(()=>{
        ShallowComponent = shallow(<DependsOnState />);
    })

    it('+++ render dump components', () => {
        expect(ShallowComponent.length).toBe(1);
    });

});
