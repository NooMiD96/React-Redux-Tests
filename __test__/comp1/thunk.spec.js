import * as React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import 'whatwg-fetch';
import Adapter from 'enzyme-adapter-react-16';
import * as ActionThunk from '../../ClientApp/modules/comp1/thunk';
import * as ActionTypes from '../../ClientApp/modules/comp1/actionTypes';

configure({ adapter: new Adapter() });

describe('Test Comp1 Actions Thunk', () => {
    let windowFetch;
    beforeAll(() => {
        windowFetch = window.fetch;
    })

    const data = '111';
    const middlewares = [ thunk ];

    it('+++ POST request', () => {
        let targetUrl;
        let targetData;
        //create custom response
        const mockResponse = (status, statusText, response) => {
            return new window.Response(response, {
                status: status,
                statusText: statusText,
                headers: {
                    'Content-type': 'application/json'
                }
            });
        };
        //create custome fetch
        window.fetch = jest.fn().mockImplementation((resUrl, resData) => {
            targetUrl = resUrl;
            targetData = resData;
            return Promise.resolve(mockResponse(200, null, 'ok'));
        });
    
        const mockStore = configureMockStore(middlewares);
        const store = mockStore();

        let fetchPost = ActionThunk.fetchPosts(data);
        fetchPost(store.dispatch)
            .then((some) => {
                let actions = store.getActions();

                expect(targetUrl).toMatch(new RegExp(/^(\/data\/?)$/));
                expect(targetData).toEqual({
                    method: 'POST',
                    body: JSON.stringify(data)
                });
                expect(actions.length).toBe(2);
                expect(actions[0]).toEqual({type: ActionTypes.DATA_REQUEST});
                expect(actions[1]).toEqual({type: ActionTypes.DATA_REQUEST_SUCCESS, payload: 'Loading...'});
            });
    });

    it('+++ GET request', () => {
        let targetUrl;
        let targetData;
        //create custom response
        const mockResponse = (status, statusText, response) => {
            return new window.Response(response, {
                status: status,
                statusText: statusText,
                headers: {
                    'Content-type': 'application/json'
                }
            });
        };
        //create custome fetch
        window.fetch = jest.fn().mockImplementation((resUrl, resData) => {
            targetUrl = resUrl;
            targetData = resData;
            return Promise.resolve(mockResponse(200, null, JSON.stringify(data)));
        });

        const mockStore = configureMockStore(middlewares);
        const store = mockStore();

        let fetchPost = ActionThunk.fetchGet();
        fetchPost(store.dispatch)
            .then((some) => {
                let actions = store.getActions();


                expect(targetUrl).toMatch(new RegExp(/^(\/data\/?)$/));
                expect(targetData).toEqual({
                    method: 'GET'
                });
                expect(actions.length).toBe(2);
                expect(actions[0]).toEqual({type: ActionTypes.DATA_REQUEST});
                expect(actions[1]).toEqual({type: ActionTypes.DATA_REQUEST_SUCCESS, payload: data});
            });
    });

    afterAll(() => {
        window.fetch = windowFetch;
    })
});
