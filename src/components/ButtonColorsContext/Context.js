import React, {createContext, useState} from 'react';

export const ColorsContext = createContext();

const ColorsContextProvider = (props) => {
    const [selectedColors, setSelectedColors] = useState([]);
    const [availableColors] = useState([
        'red', 'green', 'blue', 'black', 'orange'
    ]);
    const [buttonColors, setButtonColors] = useState(null);

    const handleColorChange = () => {
        let color;
        switch (buttonColors) {
            case 'blue':
                color = availableColors.find(item => item === 'green')
                setButtonColors(color);
                setSelectedColors([...selectedColors, color ])
                break;

            case 'red':
            case 'green':
            case 'black':
            case 'orange':
                let tempArray = availableColors.filter(item => item !== buttonColors);
                let tempColorIndex = Math.floor(Math.random() * 4);
                color = tempArray[tempColorIndex];
                setButtonColors(color);
                setSelectedColors([...selectedColors, color ])
                break;

            default:
                let colorIndex = Math.floor(Math.random() * 5);
                color = availableColors[colorIndex];
                setButtonColors(availableColors[colorIndex]);
                setSelectedColors([...selectedColors, color ])
        }
    }

    return (
        <ColorsContext.Provider value={{
            availableColors: availableColors,
            selectedColors: selectedColors,
            buttonColors: buttonColors,
            handleColorChange: () => handleColorChange()
        }}>
            {props.children}
        </ColorsContext.Provider>
    );
};

export default ColorsContextProvider;