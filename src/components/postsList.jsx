import React, { useState, useEffect } from "react";
import Post from "./post";
import FilterToolbar from "./filterToolbar";
import { useGetAllPostsMutation, useSearchReviewMutation } from "../api/api";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";

const PostList = ({searchText}) => {
    const { isDarkTheme } = useTheme();
    const { t } = useTranslation();
    const [posts, setPosts] = useState([]);
    const [foundPost, setFoundPost] = useState([]);
    const [category, setCategory] = useState("All");
    const [orderBy, setOrderBy] = useState();
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true)
    const limit = 8;

    const [getAllPosts] = useGetAllPostsMutation();
    const [getSearchReview] = useSearchReviewMutation()


    useEffect(() => {
        setHasMore(true)
        if (page !== 0) {
            setPosts([]);
            setPage(0);
        } else {
            const sortParams = {
                category: category,
                sort: orderBy,
                limit: limit,
                page: 0,
            }
            getAllPosts(sortParams)
                .then((data) => {
                    setPosts(data.data);
                });
        }
    }, [category, orderBy]);

    useEffect(() => {
        const sortParams = {
            category: category,
            sort: orderBy,
            limit: limit,
            page: page,
        }
        getAllPosts(sortParams)
            .then((data) => {
                if (data.data.length === 0) {
                    setHasMore(false);
                } else {
                    setPosts([...posts, ...data.data]);
                }
            });
    }, [page]);

    useEffect(() => {
        if (searchText) {
            getSearchReview(searchText).unwrap().then((res) => {
                setFoundPost(res);
            })
        } else {
            setFoundPost([]);
        }
    }, [searchText]);

    const handlePagePlus = () => {
        setPage(page + 1);
    };

    return (
        <div className={`${isDarkTheme ? 'bg-backgroundDark text-textDark' : 'bg-white text-gray-900'} font-inter min-h-screen`}>
            <div className={`container mx-auto pt-[110px]`}>
                <h1 className="text-3xl md:text-5xl font-semibold ml-8">{t("reviews")}: {t(category)}</h1>
                <FilterToolbar onCategoryClick={setCategory} onSortSelect={setOrderBy}/>
                <InfiniteScroll
                    dataLength={posts.length}
                    next={handlePagePlus}
                    hasMore={hasMore}
                    loader={<h4>{t("loading...")}</h4>}
                >
                    <div className=" md:grid grid-cols-2 gap-x-8 gap-y-12 my-10">
                        {searchText.length > 0 ?
                            (
                            foundPost.length > 0 ?
                                (
                                    foundPost.map((post, index) => <Post {...post} key={index} />
                                )) : (
                                    <div>No found reviews</div>
                                )
                        ) : (
                            posts.map((post, index) => <Post {...post} key={index} />)
                        )}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default PostList;