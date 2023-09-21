import React, {useState} from "react";
import { useTranslation } from "react-i18next";

const RateBox = ({getRate, sendRate, rate}) => {
    const [rating, setRating] = useState(null);
    const {t} = useTranslation();

    const handleRate = () => {
        if (rating) {
            sendRate(rating);
        }
    };

    return (
        <div className="flex flex-col justify-start items-center px-16 py-14 bg-indigo-700 rounded-2xl">
            <h2 className="text-4xl font-inter text-white font-semibold">{t("How do you like the review?")}</h2>
            <p className="text-lg font-inter text-white w-3/4 text-center mt-3">{t("Rate the review that the author did for you. Reviews with high ratings are more likely to be included in recommendations.")}</p>
            <p className="text-lg font-inter text-white w-3/4 text-center mt-3">{rate}</p>
            <div className="rating flex flex-row gap-4 my-8">
                {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star} className="text-5xl">
                        <input
                            className="hidden"
                            type="radio"
                            name="rating"
                            value={star}
                            checked={star === rating}
                            onChange={(e) => {setRating(e.target.value); getRate(e.target.value)}}
                        />
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="star">
                                <path
                                    id="Icon (Stroke)"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.999 2.23334C20.8531 2.23334 21.6331 2.71818 22.0111 3.48402L26.1119 11.7918L35.2827 13.1322C36.1276 13.2557 36.8292 13.8481 37.0926 14.6604C37.356 15.4727 37.1355 16.3641 36.5238 16.9599L29.8897 23.4216L31.4553 32.5502C31.5997 33.3921 31.2536 34.2429 30.5625 34.7449C29.8715 35.247 28.9553 35.3131 28.1993 34.9155L19.999 30.603L11.7986 34.9155C11.0427 35.3131 10.1265 35.247 9.43543 34.7449C8.74437 34.2429 8.39826 33.3921 8.54265 32.5502L10.1083 23.4216L3.47421 16.9599C2.86249 16.3641 2.64198 15.4727 2.90536 14.6604C3.16874 13.8481 3.87036 13.2557 4.71531 13.1322L13.8861 11.7918L17.9869 3.48402C18.3649 2.71818 19.1449 2.23334 19.999 2.23334Z"
                                    fill="white"
                                    fillOpacity={(star <= rating) ? 1 : 0.3}
                                />
                            </g>
                        </svg>
                    </label>
                ))}
            </div>
            <button
                className="px-5 py-3 border-solid border-customPurple bg-customPurple rounded-[8px] text-white text-base font-inter"
                onClick={handleRate}
                disabled={!rating}
            >
                {t("Rate review")}
            </button>
        </div>
    )
}

export default RateBox;