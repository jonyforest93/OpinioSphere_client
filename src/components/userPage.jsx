import React, {useState} from 'react';
import {useDeleteReviewByIdMutation, useGetUserReviewsQuery} from "../api/api";
import {useNavigate, useParams} from "react-router-dom";
import moment from "moment";
import ErrorMessage from "./errorMessage";

function UserPage(props) {
    const {id} = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const {data: reviews, isLoading} = useGetUserReviewsQuery(id, {
        skip: !id,
    });

    const [userReiews, setUserReviews] = useState(reviews);

    console.log(reviews)
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

    return (
        <>
        {
            !isLoading &&
            <div className="mt-[60px] min-h-screen container mx-auto">
                <ErrorMessage message={error} onClose={() => setError(null)} />
                <h1 className="mb-16 text-5xl font-inter text-gray-900 font-semibold">My reviews</h1>
                {
                    reviews.length > 0
                        ?
                        <table className="min-w-full divide-y divide-gray-200 text-base text-gray-900 font-inter">
                            <thead>
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
                            <tbody className="bg-white divide-y divide-gray-200">
                            {reviews.map((review) => (
                                <tr key={review._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {review.authorName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {review.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {review.likes.length}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {(review.rateSum / review.rateCount).toFixed(2)}
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
                                            Edit review
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            onClick={handleDeleteReview(review._id)}
                                            className="px-4 py-2 text-white bg-red-700 rounded">
                                            Delete
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
        </>
    );
}

export default UserPage;