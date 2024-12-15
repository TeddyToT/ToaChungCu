import React from 'react';
import ModelView from './ModelView';

const RoomModel = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Room Model</h1>
            <ModelView />
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Back to Room Info
            </button>
        </div>
    );
};

export default RoomModel;
