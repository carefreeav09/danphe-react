import {
    BUTTON_COLOR_ADD_REQUEST,
    BUTTON_COLOR_ADD_REQUEST_SUCCESS,
    BUTTON_COLOR_ADD_REQUEST_FAILURE,
    BUTTON_COLOR_CLEAN_REQUEST,
} from './types';

const INITIAL_STATE = {
    payload: null,
    selectedColors: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const buttonColorReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case BUTTON_COLOR_ADD_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case BUTTON_COLOR_ADD_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                selectedColors: [
                    ...state.selectedColors,
                   action.data
                ],
                errors: {},
            });

        case BUTTON_COLOR_ADD_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case BUTTON_COLOR_CLEAN_REQUEST:
            return Object.assign({}, state, {
                loading: false,
                payload:null,
                errors: {},
            });

        default:
            return state;
    }
};

export default buttonColorReducer;
