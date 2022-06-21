import React from 'react';
import { useSnapshot } from 'valtio';
import informationState from '../states/informationState';

const Information = () => {
    useSnapshot(informationState)

    return (
        <div className="absolute top-0 left-0 text-white w-full p-4 backdrop-blur-xl bg-black bg-opacity-25">
            <div className='text-xl font-bold'>
                {informationState.title || "Select a building to view its information"}
            </div>
            <div>
                {informationState.info || "No building selected"}
            </div>
        </div>
    );
};

export default Information;
