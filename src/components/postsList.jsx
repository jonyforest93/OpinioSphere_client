import React, { useMemo, useState, useEffect } from "react";
import Post from "./post";
import FilterToolbar from "./filterToolbar";
import {useGetAllPostsMutation} from "../api/api";



const PostList = (props) => {

    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState("All");
    const [orderBy, setOrderBy] = useState();

    const [getAllPosts] = useGetAllPostsMutation();

    useEffect(() => {
        const sortParams = {
            category: category,
            sort: orderBy
        }
        getAllPosts(sortParams)
            .then((data) => {
                setPosts(data.data);
            });
    }, [category, orderBy]);


    return (
        <>
            <div className="container mx-auto mt-[60px]">
                <h1 className="text-5xl font-inter text-gray-900 ml-8">Reviews: {category}</h1>
                <FilterToolbar onCategoryClick={setCategory} onSortSelect={setOrderBy}/>
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 my-10">
                    {posts.map((post) => (
                        <Post {...post} key={post._id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PostList;