import React from "react";
import { useTheme } from "../ThemeContext";

const ThemeSwitcher = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center mx-4">
            <label htmlFor="themeToggle" className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_322_439)">
                        <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke={isDarkTheme ? "#949BA9" : "#7F56D9" } strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_322_439">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </label>
            <input
                type="checkbox"
                id="themeToggle"
                className="hidden"
                checked={!isDarkTheme}
                onChange={toggleTheme}
            />
            <label htmlFor="themeToggle" className="toggle-label w-10 h-5 bg-gray-300 rounded-full p-1 flex items-center cursor-pointer">
                <div
                    className={`toggle-dot w-6 h-6 bg-customPurple rounded-full shadow-md transform transition-transform duration-300 ${
                        isDarkTheme ? "translate-x-3.5" : "translate-x-[-0.25rem]"
                    }`}
                ></div>
            </label>
            <label htmlFor="themeToggle" className="ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="moon">
                        <path id="Icon" d="M20.9999 12.79C20.8426 14.4922 20.2038 16.1144 19.1581 17.4668C18.1125 18.8192 16.7034 19.8458 15.0956 20.4265C13.4878 21.0073 11.7479 21.1181 10.0794 20.7461C8.41092 20.3741 6.8829 19.5345 5.67413 18.3258C4.46536 17.117 3.62584 15.589 3.25381 13.9205C2.88178 12.252 2.99262 10.5121 3.57336 8.9043C4.15411 7.29651 5.18073 5.88737 6.53311 4.84175C7.8855 3.79614 9.5077 3.15731 11.2099 3C10.2133 4.34827 9.73375 6.00945 9.85843 7.68141C9.98312 9.35338 10.7038 10.9251 11.8893 12.1106C13.0748 13.2961 14.6465 14.0168 16.3185 14.1415C17.9905 14.2662 19.6516 13.7866 20.9999 12.79Z" stroke={isDarkTheme ? "#7F56D9" : "#949BA9" } strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            </label>
        </div>
    );
};
export default ThemeSwitcher;