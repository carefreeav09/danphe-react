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

                <p className={'w-50 m-auto'}>Using ReactJs, write a solution that does the following:

                    <br/>
                    1. Render a button on dom

                    <br/>
                    2. On button click change the color of the button randomly ( available colors are red, green, blue,
                    black and orange ), <strong>However if the previous color was blue the next color should always be green.
                        Use state to store the color.</strong>

                    <br/>
                    3. Using store, reducers and context, keep track of the colors that were rendered and display it
                    below the button in a comma seperated string. For eg red, blue, green . The text for each color
                    should also display their color.</p>
                <button
                    style={{
                        background: buttonColors
                    }}
                    className={'btn btn-secondary mt-5'}
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