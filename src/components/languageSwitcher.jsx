import React from "react";
import { useTranslation } from "react-i18next";


function LanguageSwitcher() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex justify-center items-center">
            <button
                className={`px-2 py-2.5 text-base font-inter ${
                    i18n.language === "en" ? "text-customPurple" : "text-gray-500"
                }`}
                onClick={() => changeLanguage("en")}
            >
                En
            </button>
            <span className="mx-1">/</span>
            <button
                className={`px-2 py-2.5 text-base font-inter ${
                    i18n.language === "ru" ? "text-customPurple" : "text-gray-500"
                }`}
                onClick={() => changeLanguage("ru")}
            >
                Ru
            </button>
        </div>
    );
}

export default LanguageSwitcher;