import React from "react";
import moment from "moment/moment";
import { useTheme } from "../ThemeContext";

const Comment = (props) => {
    const { isDarkTheme } = useTheme();

    return (
        <div className={`${isDarkTheme ? 'border-borderDark text-textDark' : 'border-gray-300 text-gray-900'} font-inter pb-10 mb-10 border-b border-solid`}>
            <div className="flex flex-row">
                <div className="rounded-full w-10 h-10 bg-gray-500 mr-3"></div>
                <div className="flex flex-col justify-center items-start">
                    <p className="text-sm  ">{props.userName}</p>
                    <p
                        className={`${isDarkTheme ? 'text-[#BFC6D2]' : 'text-gray-500'} text-sm`}
                    >
                        {moment(props.craetedAt).format('YYYY-MM-DD')}
                    </p>
                </div>
            </div>
            <div className="mt-5">
                <p className={`${isDarkTheme ? 'text-[#BFC6D2]' : 'text-gray-500'} text-lg`}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Comment;