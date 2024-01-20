import React, { useState } from 'react';
import ButtonContext from './ButtonContext';

const TopRightPanel = () => {
    const [isButtonOn, setButtonOn] = useState(true);

    const toggleButton = () => {
        setButtonOn(!isButtonOn);
    };

    return (
        <div className="absolute top-0 right-0 w-24 h-24 p-2 border border-gray-200 rounded bg-gray-100 z-10">
            <div className="mt-2">
                <span className="mr-2">Edit</span>
                <label className="switch">
                    <input type="checkbox" checked={isButtonOn} onChange={toggleButton} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
};

export default TopRightPanel;