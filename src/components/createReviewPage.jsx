import React, {useEffect, useState} from 'react';
import {useCreateReviewMutation, useEditReviewByIdMutation, useGetPostByIdQuery, useGetTagsMutation} from "../api/api";
import ImageUploader from "./dragAndDrop";
import {useNavigate, useParams} from "react-router-dom";

function CreateReviewPage(props) {
    const options = ['Game', 'Film', 'Book'];
    const [category, setCategory] = useState('Game');
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [tag, setTag] = useState('')
    const [autoCompletedTags, setAutoCompletedTags] = useState([])
    const [description, setDescription] = useState('');
    const [mark, setMark] = useState(1);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState('')
    const navigate = useNavigate()

    const [tags, setTags] = useState([])

    const {id} = useParams();
    const editMode = !!id;

    const {data: post, isLoading: isPostLoading} = useGetPostByIdQuery(id, {
        skip: !id,
    });
    const [createReview] = useCreateReviewMutation();
    const [getTags] = useGetTagsMutation();
    const [editReview] = useEditReviewByIdMutation();

    useEffect(() => {
        if (post) {
            setCategory(post.review.category);
            setName(post.review.name);
            setSubject(post.review.subject);
            setDescription(post.review.description);
            setMark(post.review.mark);
            setTags(post.review.tags);
        }
    }, [post]);



    const handleForm = (e) => {
        e.preventDefault();
        const review = {
            category: category,
            name: name,
            subject: subject,
            description: description,
            image: selectedFile,
            tags: tags,
            mark: mark,
            filename: selectedFileName,
        }
        if (editMode) {
            review.image = post.image;
            const body = {
                review: review,
                id: id,
            };
            editReview(body).unwrap().then((res) => {
                navigate(`/review/${res._id}/details`)
            })
        } else {
            createReview(review).unwrap().then((res) => {
                navigate(`/review/${res._id}/details`)
            });
        }
    }

    const handleSelectChange = (e) => {
        setCategory(e.target.value);
    }
    const handleAddTag = () => {
        const array = [...tags]
        array.push(tag)
        setTags(array)
        setTag('')
    }

    const handleRemoveTag = (e) => {
        const parentElement = e.target.closest('span');
        const value = parentElement.innerText
        const array = [...tags];

        array.splice(array.indexOf(value), 1);

        setTags(array);
    }

    const handleSelectFile = (file, name) => {
        setSelectedFile(file)
        setSelectedFileName(name)
    }

    const handleTagInput = (e) => {
        setTag(e.target.value);

        const text = e.target.value;
        getTags(text).unwrap().then((res) => {
            setAutoCompletedTags(res);
        });
    }

    const handleAddTagForAutocomplete = (e) => {
        const text = e.target.innerText;
        const array = [...tags]
        array.push(text)
        setTags(array)
        setTag('')
        setAutoCompletedTags([])
    }

    return (
        <>
            {
                !isPostLoading
                &&
                <div className="container mx-auto">
                    <h1 className="font-inter text-5xl font-bold text-gray-900 mt-[60px] mb-3 text-center">
                        Create a review
                    </h1>
                    <p className="font-inter text-xl text-gray-500 mb-8 text-center">
                        Create your review with detailed information.
                    </p>
                    <div className="w-3/4 mx-auto">
                        <form action="/" onSubmit={handleForm} className="flex-col ">
                            <div>
                                <label className="text-gray-700 text-sm font-inter" htmlFor="category">
                                    Category*
                                </label>
                                <select
                                    value={category}
                                    id="category"
                                    onChange={handleSelectChange}
                                    className="w-full h-11 text-base text-gray-900 border rounded-lg mt-2 px-4 py-2 focus:outline-none focus:ring focus:border-customPurple"
                                >
                                    <option disabled>Select a category</option>
                                    {options.map((elem) => (
                                        <option key={elem} value={elem}>
                                            {elem}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-5">
                                <label className="text-gray-700 text-sm font-inter" htmlFor="title">
                                    Title*
                                </label>
                                <input
                                    className="border rounded-lg w-full mt-2 py-2.5 px-3.5 text-gray-700 focus:outline-none focus:ring focus:border-customPurple"
                                    id="title"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter review title"
                                    required
                                />
                            </div>
                            <div className="mt-5">
                                <label className="text-gray-700 text-sm font-inter" htmlFor="subject">
                                    Subject*
                                </label>
                                <input
                                    className="border rounded-lg w-full mt-2 py-2.5 px-3.5 text-gray-700 focus:outline-none focus:ring focus:border-customPurple"
                                    id="subject"
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Enter review subject"
                                    required
                                />
                            </div>
                            {
                                !editMode
                                &&
                                <div className="mt-5">
                                    <ImageUploader handleImageDrop={handleSelectFile}/>
                                </div>
                            }

                            <div className="mt-5">
                                <label className="text-gray-700 text-sm font-inter" htmlFor="tag">
                                    Enter Tags (max 20)
                                </label>
                                <div className="flex items-center justify-between gap-4 relative">
                                    <input
                                        className="flex-grow border rounded-lg w-full mt-2 py-2.5 px-3.5 text-gray-700 focus:outline-none focus:ring focus:border-customPurple"
                                        id="tag"
                                        type="text"
                                        value={tag}
                                        onChange={handleTagInput}
                                        placeholder="Enter tag"
                                    />
                                    <div className="absolute top-[4.5rem] left-0 flex justify-between z-30">
                                        {autoCompletedTags.map(el => (
                                            <span onClick={handleAddTagForAutocomplete}
                                                  className="flex justify-start items-center text-customPurple text-sm font-inter mr-3 py-1.5 pl-3.5 pr-2.5 bg-gray-300 rounded-lg"
                                                  key={el._id}
                                            >{el.tag}
                                                <svg
                                                    onClick={handleRemoveTag}
                                                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="x">
                                            <path id="Icon" d="M12 4L4 12M4 4L12 12" stroke="#949BA9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                    </svg>
                                </span>
                                        ))}
                                    </div>
                                    <button
                                        disabled={!tag}
                                        type="button"
                                        onClick={handleAddTag}
                                        className="flex justify-center items-center mt-2 text-white bg-customPurple font-inter text-base px-[18px] py-2.5 rounded-lg disabled:opacity-50"
                                    >
                                        <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Plus">
                                                <path id="Icon" d="M17.0711 10H2.92893M10 2.92896V17.0711" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                        </svg>
                                        Add
                                    </button>
                                </div>

                                <div className="flex flex-wrap items-center mt-5">
                                    {tags.map(el => (
                                        <span
                                            className="flex justify-start items-center text-[#667085] text-sm font-inter mr-3 py-0.5 pl-2.5 pr-1.5 bg-[#667085] bg-opacity-10 rounded-lg"
                                            key={el}
                                        >{el}
                                            <svg
                                                onClick={handleRemoveTag}
                                                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="x">
                                            <path id="Icon" d="M12 4L4 12M4 4L12 12" stroke="#949BA9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                    </svg>
                                </span>
                                    ))}
                                </div>

                            </div>
                            <div className="mt-5">
                                <label className="text-gray-700 text-sm font-inter" htmlFor="description">
                                    Review text*
                                </label>
                                <textarea
                                    className="border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-customPurple"
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter review text"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="flex flex-col items-start mt-5">
                                <label className="mb-2 text-gray-700 text-sm font-inter" htmlFor="numberSlider">
                                    Set Mark*
                                </label>
                                <input
                                    className="w-full appearance-none h-2 bg-gray-300 rounded-full"
                                    type="range"
                                    id="numberSlider"
                                    min="1"
                                    max="10"
                                    step="1"
                                    value={mark}
                                    onChange={(e) => setMark(e.target.value)}
                                />
                                <p className="text-gray-700 text-base font-inter">Your mark: {mark}</p>
                            </div>
                            <div className="flex justify-center mb-[96px]">
                                <button
                                    type="submit"
                                    className="mt-14 text-white bg-customPurple font-inter text-base w-21 h-11 px-[18px] py-2.5 rounded-lg"
                                >
                                    Save Review
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>

    );
}

export default CreateReviewPage;