import React from "react";

const TagsBar = ({tags}) => {

    return (
        <div className="flex flex-row gap-2 justify-start items-center">
            {
                tags.map(el => (
                    <div className="bg-gray-600 bg-opacity-10 rounded-[4rem]" key={el}>
                        <p className="px-2.5 py-0.5 text-gray-600 text-sm font-inter">{el}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TagsBar;