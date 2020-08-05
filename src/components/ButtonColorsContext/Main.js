import React, {useContext} from 'react';
import {ColorsContext} from "./Context";

const Main = (props) => {
    const colorsContextData = useContext(ColorsContext);
    const {
        selectedColors,
        buttonColors,
        handleColorChange
    } = colorsContextData

    const handleButtonClick = () => {
        handleColorChange()
    };

    return (
        <div className={'problem-container w-100 text-center'}
        >
            <div>
                <h1>React Context Hooks Approach.</h1>
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
                    {selectedColors?.map((item, itemIndex) => (
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