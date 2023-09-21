import React from "react";
import { useTranslation } from "react-i18next";

const ButtonAuth = ({onClick}) => {
    const { t } = useTranslation();
    const handleLogin = (event) => {
        onClick(event);
    };
    return (
        <>
            <button className={"text-gray-500 font-inter text-base w-21 h-11 px-[18px] py-2.5 rounded-lg"}
                    onClick={handleLogin}
            >{t("Sign In")}
            </button>
        </>
    )
}

export default ButtonAuth