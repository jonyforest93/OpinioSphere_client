import React from "react";
import moment from "moment/moment";

const Comment = (props) => {

    return (
        <div className="pb-10 mb-10 border-b border-solid border-gray-300">
            <div className="flex flex-row">
                <div className="rounded-full w-10 h-10 bg-gray-500 mr-3"></div>
                <div className="flex flex-col justify-center items-start">
                    <p className="text-sm font-inter text-gray-900">{props.userName}</p>
                    <p className="text-sm font-inter text-gray-500">{moment(props.craetedAt).format('YYYY-MM-DD')}</p>
                </div>
            </div>
            <div className="mt-5">
                <p className="text-lg text-gray-500 font-inter">
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Comment;