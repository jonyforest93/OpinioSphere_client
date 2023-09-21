import React from "react";
import { useTheme } from "../ThemeContext";

const TagsBar = ({tags}) => {
    const { isDarkTheme } = useTheme();

    return (
        <div className="flex flex-row gap-2 justify-start items-center">
            {
                tags.map(el => (
                    <div
                        className={`${isDarkTheme ? 'bg-[#BFC6D21A] bg-opacity-10 text-[#BFC6D2]' : 'bg-gray-600 bg-opacity-10 text-gray-600'} rounded-[4rem]`}
                        key={el}
                    >
                        <p className="px-2.5 py-0.5 text-sm font-inter">{el}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TagsBar;