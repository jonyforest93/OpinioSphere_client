import React from "react";

const ButtonAuth = ({onClick}) => {
    const handleLogin = (event) => {
        onClick(event);
    };
    return (
        <>
            <button className={"text-gray-500 font-inter text-base w-21 h-11 px-[18px] py-2.5 rounded-lg"}
                    onClick={handleLogin}
            >Sign In
            </button>
        </>
    )
}

export default ButtonAuth