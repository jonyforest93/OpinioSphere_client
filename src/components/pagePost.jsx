import React, {useEffect, useState} from "react";
import TagsBar from "./tagsBar";
import RateBox from "./rateBox";
import ErrorMessage from "./errorMessage";
import CreateComment from "./createComment";
import Comment from "./comment";
import {useNavigate, useParams} from "react-router-dom";
import moment from 'moment';
import {useCreateCommentMutation, useGetPostByIdQuery, useReviewLikeMutation, useGetCommentsByReviewQuery, useSetMarkByReviewMutation} from "../api/api";
import tokenService from "../services/token.service";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";

const PagePost = (props) => {
    const { isDarkTheme } = useTheme();
    const { t } = useTranslation();
    const {id} = useParams();
    const navigate = useNavigate();
    const [reviewLike, {isFetching}] = useReviewLikeMutation();
    const {data: post, isLoading} = useGetPostByIdQuery(id, {
        skip: !id,
    });
    const [createComment] = useCreateCommentMutation();
    const [setMarkByReview] = useSetMarkByReviewMutation();
    const {data: comments, isLoading: isCommentsLoading} = useGetCommentsByReviewQuery(id, {
        skip: !id,
    })

    const [likes, setLike] = useState(null);
    const [commentText, setCommentText] = useState('');
    const [rate, setRate] = useState(null);
    const [userRate, setUserRate] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        if (post && post.review) {
            setLike(post.review.likes);
            setUserRate(post.review.userMark)
        }
    }, [post]);

    const handleLike = () => {
        reviewLike(id)
            .unwrap()
            .then((res) => {
            setLike(res.likes)
        }).catch(({data}) => {
            setError(data.message)
        })
    }

    const handleCommentText = (value) => {
        setCommentText(value);
    }

    const handleRate = (value) => {
        setRate(value);
    }

    const handleSendRate = () => {
        const mark = {
            mark: rate,
            reviewId: id,
        };
        setMarkByReview(mark)
            .unwrap()
            .then((res) => {
            setUserRate(`Your mark is ${res}`);
        }).catch(({ data }) => {
            setError(data.message);
        })
    }

    const handleSendComment = () => {
        const comment = {
            text: commentText,
            reviewId: id,
        }
        createComment(comment)
            .unwrap()
            .then(()=> {
                setCommentText('')
            })
            .catch(({ data }) => {
                console.log(data.message);
            })
    }

    return (
        <div className={`${isDarkTheme ? 'bg-backgroundDark text-textDark' : 'bg-white text-gray-900'}`}>
            {!isLoading && !isCommentsLoading
            &&
                <div
                    className={`${isDarkTheme ? 'text-textDark' :'text-gray-900'}
                    container mx-auto pt-[110px] pb-10 relative`}
                >
                    <ErrorMessage message={error} onClose={() => setError(null)} />
                    { tokenService.getUserId() === post.author._id &&
                    <button
                        className={`${isDarkTheme ? 'bg-[#2E2A4C] text-[#B395F6]' : 'bg-indigo-50 text-customPurple'}
                        absolute rounded-[8px] top-26 right-0 flex justify-start items-center gap-2 text-base px-[18px] py-[10px]`
                    }
                        onClick={() => {navigate(`/review/${id}`)}}
                    >
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
                    }
                    <div className="flex flex-col justify-start items-center">
                        <p className="text-xl text-customPurple">{post.review.category}</p>
                        <h1 className="text-5xl mt-3 font-semibold">{post.review.name}</h1>
                        <h2 className="text-3xl mt-3 font-semibold">{post.review.subject}</h2>
                        <div className="flex flex-row justify-center mt-8">
                            <div>
                                <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="56" height="56" rx="28" fill="#667085" fillOpacity="0.1"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.6528 20.4857C20.6528 16.0546 24.1661 12.4624 28.5 12.4624C32.8339 12.4624 36.3472 16.0546 36.3472 20.4857C36.3472 24.9168 32.8339 28.509 28.5 28.509C24.1661 28.509 20.6528 24.9168 20.6528 20.4857ZM16.6734 34.0683C18.145 32.5636 20.141 31.7183 22.2222 31.7183H34.7778C36.859 31.7183 38.855 32.5636 40.3266 34.0683C41.7982 35.573 42.625 37.6137 42.625 39.7416V42.9509C42.625 43.8372 41.9749 44.7313 41.0556 45.3579C40.1362 45.9846 36.7675 46.9589 34.0051 47.344C29.4505 47.979 26.7616 47.9061 22.2222 47.1655C19.7267 46.7583 16.7276 45.9415 15.9444 45.3579C15.0515 44.6925 14.375 43.8372 14.375 42.9509V39.7416C14.375 37.6137 15.2018 35.573 16.6734 34.0683Z" fill="#667085" fillOpacity="0.4"/>
                                </svg>
                            </div>
                            <div className="ml-2 flex flex-col justify-center items-start">
                                <p className="text-lg">{post.author.name}</p>
                                <p className="text-base text-gray-500">{moment(post.review.createdDate).format('YYYY-MM-DD')}</p>
                            </div>
                        </div>
                        <div
                            className={`${isDarkTheme ? 'bg-[#BFC6D21A] bg-opacity-10 text-[#E4E7EC]' : 'bg-gray-700 bg-opacity-10 text-gray-700'}
                            mt-7 rounded-[5rem] px-4 py-2 flex flex-row justify-center items-center`}
                        >
                            <span>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="star">
                                    <path id="Icon (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M8.4994 0.893311C8.84102 0.893311 9.15303 1.08725 9.30424 1.39358L10.9446 4.71669L14.6129 5.25287C14.9509 5.30227 15.2315 5.53923 15.3369 5.86415C15.4422 6.18907 15.354 6.54562 15.1093 6.78395L12.4557 9.3686L13.0819 13.0201C13.1397 13.3568 13.0012 13.6971 12.7248 13.8979C12.4484 14.0988 12.0819 14.1252 11.7795 13.9662L8.4994 12.2412L5.21926 13.9662C4.91686 14.1252 4.5504 14.0988 4.27398 13.8979C3.99755 13.6971 3.85911 13.3568 3.91687 13.0201L4.54313 9.3686L1.88949 6.78395C1.6448 6.54562 1.5566 6.18907 1.66195 5.86415C1.7673 5.53923 2.04795 5.30227 2.38593 5.25287L6.05424 4.71669L7.69456 1.39358C7.84577 1.08725 8.15778 0.893311 8.4994 0.893311Z" fill={isDarkTheme ? "#E4E7EC" : "#101828"}/>
                                    </g>
                                </svg>
                            </span>
                            <span className="text-base ml-1">{post.review.mark}</span>
                        </div>
                    </div>
                    <div className="mt-10">
                        <TagsBar tags={post.review.tags}/>
                    </div>
                    <div className="w-full h-100 mt-5">
                        <img src={post.review.image} alt={post.review.subject} className="object-cover w-full h-full"/>
                    </div>
                    <div className={`${isDarkTheme ? 'border-borderDark' : 'border-gray-300'} w-3/4 mx-auto mt-[150px] mb-6 border-b border-solid`}>
                        <div className={`${isDarkTheme ? 'text-textDark' : 'text-gray-500'} text-lg pb-12`}>
                            <ReactMarkdown>
                                {post.review.description}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div className="w-full mt-8 flex justify-between items-center w-3/4 mx-auto">
                        <div className="flex flex-row justify-center">
                            <div>
                                <svg width="40" height="40" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="56" height="56" rx="28" fill="#667085" fillOpacity="0.1"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.6528 20.4857C20.6528 16.0546 24.1661 12.4624 28.5 12.4624C32.8339 12.4624 36.3472 16.0546 36.3472 20.4857C36.3472 24.9168 32.8339 28.509 28.5 28.509C24.1661 28.509 20.6528 24.9168 20.6528 20.4857ZM16.6734 34.0683C18.145 32.5636 20.141 31.7183 22.2222 31.7183H34.7778C36.859 31.7183 38.855 32.5636 40.3266 34.0683C41.7982 35.573 42.625 37.6137 42.625 39.7416V42.9509C42.625 43.8372 41.9749 44.7313 41.0556 45.3579C40.1362 45.9846 36.7675 46.9589 34.0051 47.344C29.4505 47.979 26.7616 47.9061 22.2222 47.1655C19.7267 46.7583 16.7276 45.9415 15.9444 45.3579C15.0515 44.6925 14.375 43.8372 14.375 42.9509V39.7416C14.375 37.6137 15.2018 35.573 16.6734 34.0683Z" fill="#667085" fillOpacity="0.4"/>
                                </svg>
                            </div>
                            <div className="ml-2 flex flex-col justify-center items-start">
                                <p className="text-sm">{post.author.name}</p>
                                <p className="text-sm font-inter text-gray-500">{moment(post.review.createdDate).format('YYYY-MM-DD')}</p>
                            </div>
                        </div>
                        <button className="cursor-pointer" onClick={handleLike}>
                            <span
                                className={`text-base ${isDarkTheme ? 'bg-[#BFC6D21A]' : 'bg-purple-100'}
                                ${post.review.isLiked ?  'text-customPurple' : 'text-gray-600'}
                                font-inter px-4 py-2 rounded-xl flex justify-start items-center`}
                            >
                                 <span className="mr-1">
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.64115 0.662173C10.167 0.444275 10.7307 0.332123 11.2999 0.332123C11.8692 0.332123 12.4328 0.444275 12.9587 0.662173C13.4845 0.88003 13.9622 1.19933 14.3645 1.60182C14.767 2.00419 15.0866 2.48213 15.3044 3.00791C15.5223 3.53378 15.6345 4.09744 15.6345 4.66667C15.6345 5.23591 15.5223 5.79956 15.3044 6.32544C15.0865 6.85126 14.7672 7.32902 14.3647 7.73141L8.47132 13.6247C8.21097 13.8851 7.78886 13.8851 7.52851 13.6247L1.63518 7.73141C0.82236 6.91859 0.365723 5.81617 0.365723 4.66667C0.365723 3.51717 0.82236 2.41475 1.63518 1.60194C2.448 0.789116 3.55042 0.332479 4.69992 0.332479C5.84942 0.332479 6.95184 0.789116 7.76465 1.60194L7.99992 1.8372L8.23507 1.60205C8.63746 1.1995 9.11532 0.88005 9.64115 0.662173Z" fill={post.review.isLiked ?  "#6941C6" : "#667085"}/>
                                    </svg>
                                 </span>
                                 {likes}
                            </span>
                        </button>
                    </div>
                    <div className="my-24">
                        <RateBox
                            sendRate={handleSendRate}
                            getRate={handleRate}
                            rate={userRate}
                        />
                    </div>
                    <div className="mb-20 w-3/4 mx-auto">
                        <CreateComment
                            reviewId={id}
                            getText={handleCommentText}
                            sendComment={handleSendComment}
                        />
                    </div>

                    <div className="w-3/4 mx-auto pb-10">
                        { comments.map(comment => (
                            <Comment key={comment._id} {...comment}/>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default PagePost;