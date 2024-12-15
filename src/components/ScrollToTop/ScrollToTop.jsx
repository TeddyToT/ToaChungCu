import React from "react";

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
            className="z-40 w-[40px] h-[40px] flex items-center justify-center bg-[#7dc642] rounded-md animate-bounce fixed right-5 bottom-20 cursor-pointer"
        >
            <div className="flex flex-col h-3/4 w-3/4 items-center justify-center">
                <p className=" mb-1  rotate-180 text-xl text-white animate-pulse"> Lên đầu</p>
                <p className=" h-1/4 rotate-180 text-xl text-white animate-pulse"></p>
            </div>
        </div>
    );
}

export default RollToTopButton;