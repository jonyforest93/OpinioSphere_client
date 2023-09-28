import React from "react";
import {useTranslation} from "react-i18next";

const ButtonSignUp = ({onClick}) => {
    const {t} = useTranslation()
    const handleReg = () => {
        onClick()
    }

    return (
        <>
            <button className="text-white bg-customPurple font-inter text-base px-[18px] py-2.5 rounded-lg"
                    onClick={handleReg}
            >{t("Sign Up")}
            </button>
        </>
    )
}

export default ButtonSignUp