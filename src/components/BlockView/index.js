import React from 'react';
import './blockView.css'

const Index = () => {
    return (
        <div className={'block-view-container'}
             style={{
                 backgroundImage: `url(https://i.pinimg.com/originals/86/8b/48/868b48f0ec5b3d88216f4a484b880f59.jpg)`,
             }}
        >
            <div className="block" />
        </div>
    );
};

export default Index;