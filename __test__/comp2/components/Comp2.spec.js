import * as React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { configure, mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Comp2, {Comp2 as Comp2Dumb } from '../../../ClientApp/modules/comp2/components/comp2';
import * as actions from "../../../ClientApp/modules/comp2/actions";
import * as actionTypes from "../../../ClientApp/modules/comp2/actionTypes";
import Counter from '../../../ClientApp/modules/comp2/components/Counter';
import CounterButton from '../../../ClientApp/modules/comp2/components/CounterButton';
import DependsOnState from '../../../ClientApp/modules/comp2/components/DependsOnState';

configure({ adapter: new Adapter() });

describe('Test Comp2', () => {
    const initialState = {
            comp2: {
                count: 0,
                gettedData: null
            }
        },
        mockStore = configureStore();

    let store,
        MountComponent;

    beforeEach(()=>{
        store = mockStore(initialState);
        MountComponent = mount(<Provider store={store}><Comp2 /></Provider>);
    });

    it('+++ render the connected(SMART) component with dump components', () => {
        expect(MountComponent.find(Comp2).length).toBe(1);
        expect(MountComponent.find(Counter).length).toBe(1);
        expect(MountComponent.find(CounterButton).length).toBe(1);
        expect(MountComponent.find(DependsOnState).length).toBe(0);
    });
      
    it('+++ check Prop matches with initialState', () => {
        expect(MountComponent.find(Comp2Dumb).prop('count')).toEqual(initialState.comp2.count);
    });

    it('+++ check action on dispatching ', () => {
        let action;
        store.dispatch(actions.CountInc());
        action = store.getActions();
        expect(action[0].type).toBe(actionTypes.COUNT_INC);
    });
    
    it('+++ simulate click in component', () => {
        let onButtonClick = sinon.spy();
        let sollowComp = mount(<Comp2Dumb CountInc={onButtonClick}/>)
        sollowComp.find(CounterButton).find('button').simulate('click');
        expect(onButtonClick.calledOnce).toBe(true);
    });

});
