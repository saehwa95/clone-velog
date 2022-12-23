import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import PostAdd from "../pages/PostAdd";
import PostDetail from "../pages/PostDetail";
import PostUpdate from "../pages/PostUpdate";
import SignIn from "../pages/SignIn";
import SingUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/postadd" element={<PostAdd />} />
        <Route path="/postdetail" element={<PostDetail />} />
        <Route path="/postupdate" element={<PostUpdate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
