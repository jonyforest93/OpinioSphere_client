import React from "react";
import {useNavigate} from "react-router-dom";
import moment from 'moment';

const Post = (props) => {
    const formatDate = moment(props.createdAt).format('YYYY-MM-DD');
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-start p-8 rounded-xl hover:shadow-xl shadow-gray-900" onClick={() => navigate(`/review/${props._id}/details`)}>
            <div className="w-full h-60">
                <img src={props.image} alt="img" className="object-cover w-full h-full"/>
            </div>
            <div className="mt-10 flex justify-start">
                <span className="text-base text-badge font-inter px-4 py-2 rounded-xl bg-purple-100 mr-3">{props.category}</span>
                {
                    !!props.rateCount &&
                    <span className="text-base text-badge font-inter px-4 py-2 rounded-xl bg-purple-100 flex justify-start items-center">{(props.rateSum / props.rateCount).toFixed(2)}
                        <span className="ml-1">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="star">
                                    <path id="Icon (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M7.99989 0.893341C8.34151 0.893341 8.65352 1.08728 8.80473 1.39361L10.445 4.71672L14.1134 5.2529C14.4513 5.3023 14.732 5.53926 14.8373 5.86418C14.9427 6.1891 14.8545 6.54565 14.6098 6.78398L11.9562 9.36863L12.5824 13.0201C12.6402 13.3568 12.5017 13.6972 12.2253 13.898C11.9489 14.0988 11.5824 14.1252 11.28 13.9662L7.99989 12.2412L4.71975 13.9662C4.41735 14.1252 4.05089 14.0988 3.77447 13.898C3.49804 13.6972 3.3596 13.3568 3.41735 13.0201L4.04362 9.36863L1.38998 6.78398C1.14529 6.54565 1.05709 6.1891 1.16244 5.86418C1.26779 5.53926 1.54844 5.3023 1.88642 5.2529L5.55473 4.71672L7.19505 1.39361C7.34626 1.08728 7.65826 0.893341 7.99989 0.893341Z" fill="#6941C6"/>
                                </g>
                            </svg>
                        </span>
                    </span>
                }
            </div>
            <div className="mt-4">
                <h3 className="text-2xl text-gray-900 font-inter">{props.name}</h3>
            </div>
            <div className="mt-3 h-12 overflow-hidden">
                <p className="text-base text-gray-500 font-inter">{props.description}</p>
            </div>
            <div className="w-full mt-8 flex justify-between items-center">
                <div>
                    <p className="text-sm font-inter text-gray-900">{props.authorName}</p>
                    <p className="text-sm font-inter text-gray-500">{formatDate}</p>
                </div>
                <div>
                     <span className="text-base text-badge font-inter px-4 py-2 rounded-xl bg-purple-100 flex justify-start items-center">
                         <span className="mr-1">
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.64115 0.662173C10.167 0.444275 10.7307 0.332123 11.2999 0.332123C11.8692 0.332123 12.4328 0.444275 12.9587 0.662173C13.4845 0.88003 13.9622 1.19933 14.3645 1.60182C14.767 2.00419 15.0866 2.48213 15.3044 3.00791C15.5223 3.53378 15.6345 4.09744 15.6345 4.66667C15.6345 5.23591 15.5223 5.79956 15.3044 6.32544C15.0865 6.85126 14.7672 7.32902 14.3647 7.73141L8.47132 13.6247C8.21097 13.8851 7.78886 13.8851 7.52851 13.6247L1.63518 7.73141C0.82236 6.91859 0.365723 5.81617 0.365723 4.66667C0.365723 3.51717 0.82236 2.41475 1.63518 1.60194C2.448 0.789116 3.55042 0.332479 4.69992 0.332479C5.84942 0.332479 6.95184 0.789116 7.76465 1.60194L7.99992 1.8372L8.23507 1.60205C8.63746 1.1995 9.11532 0.88005 9.64115 0.662173Z" fill="#6941C6"/>
                            </svg>
                         </span>
                         {props.authorLikeSum}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post;