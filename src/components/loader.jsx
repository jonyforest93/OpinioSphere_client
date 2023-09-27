import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";

const Loader = () => {
    const { isDarkTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-center items-center overflow-hidden my-10">
            <div className={`${isDarkTheme ? 'border-borderLight' : 'border-customPurple'} animate-spin rounded-full h-16 w-16 border-[4px] border-t-transparent`}></div>
            <p className={`${isDarkTheme ? `text-textDark` : `text-gray-900`} mt-4 text-lg font-inter`}>{t("Loading")}...</p>
        </div>
    )
}

export default Loader;