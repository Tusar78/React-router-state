import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Friends from "./Components/Friends/Friends";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import FriendDetails from "./Components/FriendDetails/FriendDetails";
import Posts from "./Components/Posts/Posts";
import './App.css'
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friend/:friendId" element={<FriendDetails />}/>
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<PostDetails />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>      
    </>
  );
}

export default App;
