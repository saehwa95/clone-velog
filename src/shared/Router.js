import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import PostAdd from "../pages/PostAdd";
import PostDetail from "../pages/PostDetail";
import PostUpdate from "../pages/PostUpdate";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SingUP/SignUp";
import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/postadd" element={<PostAdd />} />
        <Route path="/postdetail" element={<PostDetail />} />
        <Route path="/postupdate" element={<PostUpdate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
