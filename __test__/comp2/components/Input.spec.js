import * as React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../../../ClientApp/modules/comp2/components/Input';

configure({ adapter: new Adapter() });

describe('Test Comp2 Input', () => {
    let ShallowComponent;

    beforeEach(()=>{
        ShallowComponent = shallow(<Input />);
    })

    it('+++ render dump components', () => {
        expect(ShallowComponent.length).toBe(1);
        expect(ShallowComponent.find('input').length).toBe(1);
    });

    it('+++ ', () => {
        let sendData;
        const spy = sinon.spy((val) => {sendData = val});
        const text = '111aaa';

        ShallowComponent = shallow(<Input fetchPosts={spy}/>);
        ShallowComponent.setState({text: text});

        let ShallowComponentInput = ShallowComponent.find('input');

        ShallowComponentInput.simulate('keyPress', {key: 'Enter'});
        
        expect(spy.calledOnce).toBe(true);
        expect(sendData).toBe(text);
        expect(ShallowComponent.state().text).toBe('');
    });

    it('+++ ', () => {
        let sendData;
        const spy = sinon.spy((val) => {sendData = val});
        const text = '111aaa';
        const keyValue = '}';

        ShallowComponent = shallow(<Input fetchPosts={spy}/>);
        ShallowComponent.setState({text: text});

        let ShallowComponentInput = ShallowComponent.find('input');

        ShallowComponentInput.simulate('keyPress', {key: keyValue});
        
        expect(spy.notCalled).toBe(true);
        expect(ShallowComponent.state().text).toBe(text + keyValue);
    });

});
