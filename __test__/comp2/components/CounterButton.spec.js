import * as React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import CounterButton from '../../../ClientApp/modules/comp2/components/CounterButton';

configure({ adapter: new Adapter() });

describe('Test Comp2 Counter', () => {
    let ShallowComponent,
        onButtonClick;

    beforeEach(()=>{
        onButtonClick = sinon.spy();
        
        ShallowComponent = mount(<CounterButton CountAction={onButtonClick}/>);
    })

    it('+++ render dump components', () => {
        expect(ShallowComponent.find(CounterButton).length).toBe(1);
    });

    it('+++ check button click', () => {
        ShallowComponent.find('button').simulate('click');

        expect(onButtonClick.calledOnce).toBe(true);
    });
    
});
