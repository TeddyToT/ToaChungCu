import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const RollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false); 

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 0) {
                setIsVisible(true); 
            } else {
                setIsVisible(false); 
            }
        };

        window.addEventListener("scroll", toggleVisibility); 

        return () => window.removeEventListener("scroll", toggleVisibility); 
    }, []);

    const RollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && ( 
            <div
                onClick={RollToTop}
                className="z-40 w-[3vw] h-[7vh] flex items-center justify-center bg-teal-400 rounded-md animate-bounce fixed right-5 bottom-20 cursor-pointer"
            >
                <div className="flex items-center justify-center">
                    <FaArrowAltCircleUp size={32} />
                </div>
            </div>
        )
    );
};

export default RollToTopButton;
