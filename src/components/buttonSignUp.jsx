import React from "react";

const ButtonSignUp = ({onClick}) => {

    const handleReg = () => {
        onClick()
    }

    return (
        <>
            <button className="text-white bg-customPurple font-inter text-base w-21 h-11 px-[18px] py-2.5 rounded-lg"
                    onClick={handleReg}
            >Sign Up
            </button>
        </>
    )
}

export default ButtonSignUp