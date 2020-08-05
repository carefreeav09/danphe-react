import React, {useContext, useState} from 'react';
import {ColorsContext} from "../ButtonColorsContext/Context";
import './index.css'

const Main = (props) => {
    const colorsContextData = useContext(ColorsContext);
    const {
        availableColors
    } = colorsContextData

    const {
        buttonColors, buttonColorsSelected, buttonColorChange
    } = props;

    const handleButtonClick = () => {
        buttonColorChange(availableColors, buttonColors)
    };

    return (
        <div className={'problem-container w-100 text-center'}
        >
            <div>
                <h1>React Redux Approach.</h1>
                <button
                    style={{
                        background: buttonColors
                    }}
                    className={'btn btn-secondary'}
                    onClick={() => handleButtonClick()}
                >Press me to change colors!
                </button>

                <br/>
                <div className={'container my-2'}>
                    {buttonColorsSelected?.map((item, itemIndex) => (
                        <p key={itemIndex} className={'pr-2'} style={{
                            color: item,
                            display: 'inline-block'
                        }}>
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;