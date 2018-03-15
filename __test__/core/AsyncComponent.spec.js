import * as React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AsyncComponentLoader } from "../../ClientApp/core/AsyncComponent";
import Comp1 from '../../ClientApp/modules/comp1/components/comp1';

configure({ adapter: new Adapter() });

describe('Test AsyncComponent', () => {
    const initialState = {
        comp1: {
            count: 0
        }
    },
        mockStore = configureStore();

    let Component,
        store,
        ShallowComponent;

    beforeEach(() => {
        store = mockStore(initialState);
        Component = AsyncComponentLoader(() => import('../../ClientApp/modules/comp1/components/comp1'));
        ShallowComponent = shallow(<Component />);
    })

    it('+++ return type of AsyncComponent is function', () => {
        expect(typeof (Component)).toEqual('function');
    });

    it('+++ contains import-container class in AsyncComponent', () => {
        expect(ShallowComponent.find('.import-container').length).toBe(1);
    });

    it('+++ component is null in state before componentWillMount', () => {
        ShallowComponent = shallow(<Component />, { disableLifecycleMethods: true });
        ShallowComponent.instance();
        expect(ShallowComponent.state('Component')).toEqual(null);
    });

    it('+++ can import right component with store', async () => {
        await ShallowComponent.instance().componentDidMount();
        let LoadedComp = ShallowComponent.state().Component;
        LoadedComp = mount(<LoadedComp store={store} />);

        expect(LoadedComp.length).toBe(1);
        expect(LoadedComp.instance()).toBeInstanceOf(Comp1);
    });

});
