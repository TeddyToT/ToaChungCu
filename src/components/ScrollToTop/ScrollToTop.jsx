import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
const RollToTopButton = () => {
    function RollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div
            onClick={RollToTop}
            className="z-40 w-[35px] h-[40px] flex items-center justify-center bg-teal-400 rounded-md animate-bounce fixed right-5 bottom-20 cursor-pointer"
        >
            <div className="flex items-center justify-center">
                <FaArrowAltCircleUp size={25}/>
        
            </div>
        </div>
    );
}

export default RollToTopButton;