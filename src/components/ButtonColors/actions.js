import {
    BUTTON_COLOR_ADD_REQUEST,
    BUTTON_COLOR_ADD_REQUEST_SUCCESS,
    BUTTON_COLOR_ADD_REQUEST_FAILURE,
    BUTTON_COLOR_CLEAN_REQUEST
} from "./types";

export const buttonColorAddRequest = () => {
    return {
        type: BUTTON_COLOR_ADD_REQUEST
    }
};

export const buttonColorAddRequestSuccess = (data) => {
    return {
        type: BUTTON_COLOR_ADD_REQUEST_SUCCESS,
        data
    }
};

export const buttonColorAddRequestFailure = (error) => {
    return {
        type: BUTTON_COLOR_ADD_REQUEST_FAILURE,
        error
    }
};

export const buttonColorClearRequest = () => {
    return {
        type: BUTTON_COLOR_CLEAN_REQUEST
    }
};