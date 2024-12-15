import React, { useRef, useState } from "react";

const ModelView = () => {
    const [modalLoaded, setModalLoaded] = useState(false);
    const modalRef = useRef();


    // Callback khi file đã được load
    const onModalLoaded = () => {
        setModalLoaded(true);
    };

    return (
        <>
            {modalLoaded ? (
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    
                </div>
            ) : (
                <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden h-64 w-64">
                    <div className="flex items-center justify-center h-full w-full">
                        <svg
                            className="animate-spin h-8 w-8 text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4v8h-2v5.291L6 17.291z"
                            ></path>
                        </svg>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModelView;
