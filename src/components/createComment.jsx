import React, {useState} from "react";
import tokenService from "../services/token.service";
import { useTranslation } from "react-i18next";

const CreateComment = ({getText, sendComment}) => {
    const {t} = useTranslation();
    const [commentText, setCommentText] = useState('');
    const isToken = tokenService.getToken()

    return (
        <div className="w-3/4 mx-auto">
            <h2 className="text-4xl font-inter text-gray-900 text-center font-semibold">{t("Comments on the review")}</h2>
            <p className="text-xl font-inter text-gray-500 text-center mt-4">{t("You can read the comments to the review, and also leave your comment")}</p>
            <form className="flex flex-row gap-4 mt-12" onSubmit={() => {
                sendComment();
                setCommentText('');
            }}>
                <input
                    type="text"
                    value={commentText}
                    onChange={(e) => {setCommentText(e.target.value); getText(e.target.value)}}
                    className="flex-grow h-12 border rounded-lg px-6 text-gray-500 font-inter text-base focus:outline-none"
                    placeholder="Enter your comment"
                />
                <button
                    type="submit"
                    disabled={!commentText || !isToken}
                    className="text-white bg-customPurple font-inter text-base px-5 py-3 rounded-[8px] disabled:opacity-50"
                >
                    {t("Send a comment")}
                </button>
            </form>
        </div>
    )
}

export default CreateComment;