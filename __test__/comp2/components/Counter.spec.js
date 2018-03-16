import * as React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../../../ClientApp/modules/comp2/components/Counter';
import DependsOnState from '../../../ClientApp/modules/comp2/components/DependsOnState';

configure({ adapter: new Adapter() });

describe('Test Counter', () => {
    const count = 10;
    let ShallowComponent;

    beforeEach(()=>{
        ShallowComponent = mount(<Counter count={count}/>);
    })

    it('+++ render dump components', () => {
        expect(ShallowComponent.find(Counter).length).toBe(1);
        expect(ShallowComponent.find(DependsOnState).length).toBe(0);
    });

    it('+++ contains counter class in AsyncComponent', () => {
        expect(ShallowComponent.find('.counter').length).toBe(1);
    });

    it('+++ check Props', () => {
        expect(ShallowComponent.prop('count')).toBe(count);
    });
    
    it('+++ check render sub component', () => {
        ShallowComponent.find('.counter').simulate('click');
        expect(ShallowComponent.find(DependsOnState).length).toBe(1);
    });
});
