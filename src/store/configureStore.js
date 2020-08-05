import {applyMiddleware, compose, createStore} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';

import createRootReducer from '../reducer';
import history from '../utils/history';

export { history };

const configureStore = (initialState = {}) => {
    return createStore(
        createRootReducer(history), // root reducer with router state
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                thunk,
                reduxImmutableStateInvariant()
            )
        )
    );
};

export default configureStore;
