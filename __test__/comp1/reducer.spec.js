import * as React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import reducer from '../../ClientApp/modules/comp1/reducer';
import { State } from '../../ClientApp/modules/comp1/model';
import * as Actions from '../../ClientApp/modules/comp1/actions';

configure({ adapter: new Adapter() });

describe('Test Comp1 Input', () => {
    let state;

    beforeEach(()=>{
        state = reducer(State, {type: '@@INIT'});
    })

    it('+++ check started data', () => {
        state = reducer(undefined, {type: '@@INIT'});
        
        expect(state.count).toBe(0);
        expect(state.gettedData).toBe(null);
    });

    it('+++ check initial data of model', () => {
        expect(state.count).toBe(0);
        expect(state.gettedData).toBe(null);
    });

    it('+++ check CountInc action', () => {
        const action = Actions.CountInc();
        const newState = reducer(state, action);

        expect(newState).toEqual({...State, count: State.count + 1});
        expect(newState === state).toBe(false);
    });

    it('+++ check DataRequest action', () => {
        const newState = reducer(state, Actions.DataRequest());
        const equalNewState = reducer(newState, Actions.DataRequestSuccess('Loading...'));

        expect(newState === state).toBe(false);        
        expect(newState).toEqual({...State, gettedData: 'Loading...'});
        expect(equalNewState === newState).toBe(true);
    });

    it('+++ check DataRequestSuccess action', () => {
        const data = 'some data';
        const newState = reducer(state, Actions.DataRequestSuccess(data));

        expect(newState === state).toBe(false);
        expect(newState).toEqual({...State, gettedData: data});
    });

});
