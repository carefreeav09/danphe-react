import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import buttonColorReducer from "../components/ButtonColors/reducers";

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        buttonColors: buttonColorReducer,
    });

export default createRootReducer;
