import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Main from "./Main";
import ColorsContextProvider from "../ButtonColorsContext/Context";

import * as action from "./actions";
import * as service from "./service";

const ButtonColorsContainer = props => {

    /**
     * Fetch about images
     *
     */
    const buttonColorChange = (colors, previousColor) => {
        props.actions.buttonColorChange(colors, previousColor);
    }

    return (
        <ColorsContextProvider {...props}>
            <Main
                buttonColorChange={buttonColorChange}
                {...props}
            />
        </ColorsContextProvider>
    );
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    buttonColors: state.buttonColors.payload,
    buttonColorsLoading: state.buttonColors.loading,
    buttonColorsError: state.buttonColors.error,
    buttonColorsSelected: state.buttonColors.selectedColors,
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign({},
                action,
                service
            ),
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonColorsContainer);
