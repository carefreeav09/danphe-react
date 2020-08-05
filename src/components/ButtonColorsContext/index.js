import React from 'react';
import ButtonContextProvider from './Context';
import ContextComponent from './Main';
import './index.css'

const Main = (props) => {
    return (
        <ButtonContextProvider {...props}>
            <ContextComponent {...props}/>
        </ButtonContextProvider>

    );
};

export default Main;