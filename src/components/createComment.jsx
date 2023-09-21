import React, {useState} from "react";
import tokenService from "../services/token.service";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";

const CreateComment = ({getText, sendComment}) => {
    const { isDarkTheme } = useTheme();
    const {t} = useTranslation();
    const [commentText, setCommentText] = useState('');
    const isToken = tokenService.getToken()

    return (
        <div className={`${isDarkTheme ? 'text-textDark' : 'text-gray-900'} w-3/4 mx-auto font-inter`}>
            <h2 className="text-4xl text-center font-semibold">{t("Comments on the review")}</h2>
            <p className="text-xl text-gray-500 text-center mt-4">{t("You can read the comments to the review, and also leave your comment")}</p>
            <form className="flex flex-row gap-4 mt-12" onSubmit={() => {
                sendComment();
                setCommentText('');
            }}>
                <input
                    type="text"
                    value={commentText}
                    onChange={(e) => {setCommentText(e.target.value); getText(e.target.value)}}
                    className={`${isDarkTheme ? '[#BFC6D2]' : 'text-gray-500'} bg-transparent flex-grow h-12 border rounded-lg px-6 text-base focus:outline-none`}
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