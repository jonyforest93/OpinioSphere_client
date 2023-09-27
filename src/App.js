import React, {useState} from "react"
import './App.css';
import PostsList from "./components/postsList";
import {Route, Routes} from "react-router-dom";
import CreateReviewPage from "./components/createReviewPage";
import PagePost from "./components/pagePost";
import UserPage from "./components/userPage";
import Head from "./components/head";
import Footer from "./components/footer";

const App = () => {
    const [searchText, setSearchText] = useState('');

    const getSearchPosts = (text) => {
        setSearchText(text)
    }

    return (
        <>
            <Head onSearch={getSearchPosts}/>
            <Routes>
                <Route path='/user/:id' element={<UserPage/>}/>
                <Route path='/' element={ <PostsList searchText={searchText}/>} />
                <Route path='/review/:id' element={<CreateReviewPage/>}/>
                <Route path='/review' element={<CreateReviewPage/>}/>
                <Route path='/review/:id/details' element={<PagePost/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
