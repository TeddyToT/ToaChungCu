import React from 'react';
import ModelView from './ModelView';

const RoomModel = () => {
    const handleGoBack = () => {
        // Thực hiện chuyển hướng trở lại trang trước đó
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
            </div>
            <ModelView />
            <button
                onClick={handleGoBack}
                className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
            >
                Quay Lại
            </button>
        </div>
    );
};

export default RoomModel;
