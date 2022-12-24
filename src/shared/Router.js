import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import PostAdd from "../pages/PostAdd";
import PostDetail from "../pages/PostDetail";
import PostUpdate from "../pages/PostUpdate";
import SignIn from "../pages/SignIn";
import LoginSignUp from "../pages/LoginSignUp/LoginSignUp";
import Header from "./Header";
import UserInfo from "../pages/Userinfo/UserInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/loginsignup" element={<LoginSignUp />} />
        <Route path="/postadd" element={<PostAdd />} />
        <Route path="/postdetail" element={<PostDetail />} />
        <Route path="/postupdate" element={<PostUpdate />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
