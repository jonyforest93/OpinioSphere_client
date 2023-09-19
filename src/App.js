import React from "react"
import './App.css';
import PostsList from "./components/postsList";
import {Route, Routes} from "react-router-dom";
import CreateReviewPage from "./components/createReviewPage";
import PagePost from "./components/pagePost";
import UserPage from "./components/userPage";



const App = () => {
    return (
        <Routes>
            <Route path='/' element={ <PostsList/>} />
            <Route path='/review/:id' element={<CreateReviewPage/>}/>
            <Route path='/review/:id/details' element={<PagePost/>}/>
            <Route path='/user/:id' element={<UserPage/>}/>
        </Routes>
    )
}

export default App;
