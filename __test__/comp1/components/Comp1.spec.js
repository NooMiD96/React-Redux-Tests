import * as React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { configure, mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { AsyncComponentLoader } from "../../../ClientApp/core/AsyncComponent";
import Comp1, {Comp1 as Comp1Dumb } from '../../../ClientApp/modules/comp1/components/comp1';
import * as actions from "../../../ClientApp/modules/comp1/actions";
import * as actionTypes from "../../../ClientApp/modules/comp1/actionTypes";
import Counter from '../../../ClientApp/modules/comp1/components/Counter';
import CounterButton from '../../../ClientApp/modules/comp1/components/CounterButton';
import DependsOnState from '../../../ClientApp/modules/comp1/components/DependsOnState';

configure({ adapter: new Adapter() });

describe('Test Comp1', () => {
    const initialState = {
            comp1: {
                count: 0,
                gettedData: null
            }
        },
        mockStore = configureStore();

    let store,
        MountComponent;

    beforeEach(()=>{
        store = mockStore(initialState);
        MountComponent = mount(<Provider store={store}><Comp1 /></Provider>);
    });

    it('+++ render the connected(SMART) component with dump components', () => {
        expect(MountComponent.find(Comp1).length).toBe(1);
        expect(MountComponent.find(Counter).length).toBe(1);
        expect(MountComponent.find(CounterButton).length).toBe(1);
        expect(MountComponent.find(DependsOnState).length).toBe(0);
    });
      
    it('+++ check Prop matches with initialState', () => {
        expect(MountComponent.find(Comp1Dumb).prop('count')).toEqual(initialState.comp1.count);
    });

    it('+++ check action on dispatching ', () => {
        let action;
        store.dispatch(actions.CountInc());
        action = store.getActions();
        expect(action[0].type).toBe(actionTypes.COUNT_INC);
    });
    
    it('+++ simulate click in component', () => {
        let onButtonClick = sinon.spy();
        let sollowComp = mount(<Comp1Dumb CountInc={onButtonClick}/>)
        sollowComp.find(CounterButton).find('button').simulate('click');
        expect(onButtonClick.calledOnce).toBe(true);
    });

    it('+++ check requeast when gettedData === "Loading..."', () => {
        const spy = sinon.spy();
        const comp = mount(<Comp1Dumb gettedData={null} fetchGet={spy}/>)

        comp.setProps({gettedData: 'Loading...'});
        
        expect(spy.calledOnce).toBe(true);
    });
});
