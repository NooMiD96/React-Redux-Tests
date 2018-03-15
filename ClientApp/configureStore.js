import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './rootReducer';

export default function configureStore() {
  const history = createHistory();
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const initialState = window.initialReduxState;

  const routeMiddleware = routerMiddleware(history);
  const middlewares = [thunk, routeMiddleware];
  
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return { store, history };
}
