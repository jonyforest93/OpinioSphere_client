import React, {useEffect, useState} from 'react';
import {useDeleteReviewByIdMutation, useGetUserReviewsQuery} from "../api/api";
import {useNavigate, useParams} from "react-router-dom";
import moment from "moment";
import ErrorMessage from "./errorMessage";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";

function UserPage(props) {
    const { isDarkTheme } = useTheme();
    const {t} = useTranslation();
    const {id} = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [userReviews, setUserReviews] = useState([]);

    const {data: reviews, isLoading} = useGetUserReviewsQuery(id, {
        skip: !id,
    });

    useEffect(() => {
        if (reviews) {
            setUserReviews(reviews);
        }
    }, [reviews]);

    const [deleteReview] = useDeleteReviewByIdMutation();
    const handleDeleteReview = (reviewId) => () => {
        deleteReview(reviewId)
            .unwrap()
            .then((res) => {
            setError(res.message);
        })
    }

    const handleEditReview = (reviewId) => {
        navigate(`/review/${reviewId}`)
    }

    const handleSortedReviews = (e) => {
        const array = [...userReviews];
        switch (e.target.innerText) {
            case 'AUTHOR':
                array.sort((a ,b ) => b.authorName.localeCompare(a.authorName));
                setUserReviews(array);
                break;
            case 'REVIEW TITLE':
                array.sort((a, b) => b.name.localeCompare(a.name));
                setUserReviews(array);
                break;
            case 'LIKES':
                array.sort((a, b) => b.likesCount - a.likesCount);
                setUserReviews(array);
                break;
            case 'RATE':
                array.sort((a, b) => b.averageRate - a.averageRate);
                setUserReviews(array);
                break;
            case 'CREATED':
                array.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setUserReviews(array);
                break
        }
    }

    return (
        <div className={`${isDarkTheme ? 'bg-backgroundDark text-textDark' : 'bg-white text-gray-900'}`}>
        {
            !isLoading &&
            <div className="pt-[110px] min-h-screen container mx-auto font-inter">
                <ErrorMessage message={error} onClose={() => setError(null)} />
                <h1 className="mb-16 text-5xl font-semibold">{t("Reviews list")}</h1>
                {
                    reviews.length > 0
                        ?
                        <table className="min-w-full divide-y divide-gray-200 text-base bg-transparent">
                            <thead onClick={handleSortedReviews} className="cursor-pointer">
                            <tr>
                                <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Author
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Review title
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Likes
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Rate
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Created
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50">
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50">
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-transparent divide-y divide-gray-200">
                            {userReviews.map((review) => (
                                <tr key={review._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {review.authorName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {review.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {review.likesCount}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {review.averageRate.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {moment(review.createdAt).format('YYYY-MM-DD')}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            onClick={() => handleEditReview(review._id)}
                                            className="bg-indigo-50 rounded-[8px] top-0 right-0 flex justify-start items-center gap-2 text-customPurple text-base px-[18px] py-[10px]">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="edit-3">
                                                    <path
                                                        id="Icon"
                                                        d="M10 16.6667H17.5M13.75 2.91669C14.0815 2.58517 14.5312 2.39893 15 2.39893C15.2321 2.39893 15.462 2.44465 15.6765 2.53349C15.891 2.62233 16.0858 2.75254 16.25 2.91669C16.4142 3.08085 16.5444 3.27572 16.6332 3.4902C16.722 3.70467 16.7678 3.93455 16.7678 4.16669C16.7678 4.39884 16.722 4.62871 16.6332 4.84319C16.5444 5.05766 16.4142 5.25254 16.25 5.41669L5.83333 15.8334L2.5 16.6667L3.33333 13.3334L13.75 2.91669Z"
                                                        stroke="#6941C6"
                                                        strokeWidth="1.67"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>
                                            {t("Edit review")}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            onClick={() => handleDeleteReview(review._id)}
                                            className="bg-[#FFEAF3] rounded-[8px] top-0 right-0 flex justify-start items-center gap-2 text-[#C64181] text-base px-[18px] py-[10px]">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="trash-2">
                                                    <path id="Icon" d="M2.5 5.00008H4.16667M4.16667 5.00008H17.5M4.16667 5.00008V16.6667C4.16667 17.1088 4.34226 17.5327 4.65482 17.8453C4.96738 18.1578 5.39131 18.3334 5.83333 18.3334H14.1667C14.6087 18.3334 15.0326 18.1578 15.3452 17.8453C15.6577 17.5327 15.8333 17.1088 15.8333 16.6667V5.00008H4.16667ZM6.66667 5.00008V3.33341C6.66667 2.89139 6.84226 2.46746 7.15482 2.1549C7.46738 1.84234 7.89131 1.66675 8.33333 1.66675H11.6667C12.1087 1.66675 12.5326 1.84234 12.8452 2.1549C13.1577 2.46746 13.3333 2.89139 13.3333 3.33341V5.00008M8.33333 9.16675V14.1667M11.6667 9.16675V14.1667" stroke="#C64181" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                                </g>
                                            </svg>
                                            {t("Delete review")}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        :
                        <h1>You haven't created any Reviews yet</h1>
                }

            </div>
        }
        </div>
    );
}

export default UserPage;