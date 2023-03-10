import React from "react";
import styled from "styled-components";
import logo from "../image/logo.webp";
import velog from "../image/velog.webp";
import { useState } from "react";
import LoginSignUp from "../pages/LoginSignUp/LoginSignUp";
import { IoMdMoon } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { __logout } from "../redux/modules/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { isLogin } = useSelector((state) => state.loginSlice);
  const {userName} = useSelector((state) => state.postSlice);


  if (window.location.pathname === "/postadd") return null;
  if (window.location.pathname.indexOf("/postupdate") === 0) return null;

  const toggleModal = () => {
    setModal(!modal);
  };

  const goToUserSetting = () => {
    navigate("/userinfo");
    setToggle(false);
  };

  const logoutBtn = () => {
    dispatch(__logout({ isLogin }));
    localStorage.clear();
    navigate("/");
    setToggle(false);
  };

  const profileImage = localStorage.getItem('profileImage')

  return (
    <>
      {modal && <LoginSignUp toggleModal={toggleModal} />}
      <Wrap>
        <div className="header">
          {window.location.pathname.indexOf("/postdetail") === 0 && (
            <div className="velog">
              <img
                className="v-logo"
                src={velog}
                alt="logo"
                onClick={() => navigate("/")}
              />
              <div
                className="nick-logo"
                onClick={() => window.location.reload()}
              >
                {userName}.log
              </div>
            </div>
          )}
          {window.location.pathname.indexOf("/postdetail") === -1 && (
            <div className="velog">
              <img
                className="logo"
                src={logo}
                alt="logo"
                onClick={() => navigate("/")}
              />
            </div>
          )}
          {localStorage.getItem("token") && (
            <div className="menu">
              <div>
                <IoMdMoon className="darkMode" />
              </div>
              <div>
                <CiSearch className="search" />
              </div>
              <button className="writting" onClick={() => navigate("/postadd")}>
                ??? ??? ??????
              </button>
              <section className="user-menu" onClick={() => setToggle(true)}>
                <img className="login-img" src={profileImage} alt="" />
                <IoMdArrowDropdown className="down-arrow" />
              </section>
            </div>
          )}
          {!localStorage.getItem("token") && (
            <div className="menu">
              <div>
                <IoMdMoon className="darkMode" />
              </div>
              <div>
                <CiSearch className="search" />
              </div>
              <button className="login" onClick={toggleModal}>
                ?????????
              </button>
            </div>
          )}
        </div>
      </Wrap>
      {toggle && <Backdrop onClick={() => setToggle(false)} />}
      {toggle && (
        <SettingModal>
          <div>??? ?????????</div>
          <div>?????? ???</div>
          <div>?????? ??????</div>
          <div onClick={goToUserSetting}>??????</div>
          <div onClick={logoutBtn}>????????????</div>
        </SettingModal>
      )}
    </>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  .header {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .velog {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logo {
    width: 5rem;
    cursor: pointer;
  }
  .v-logo {
    margin-right: 0.9rem;
  }
  .nick-logo {
    font-family: "Fira Mono", monospace;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  .menu > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    cursor: pointer;
    :hover {
      background-color: #2a2a2a;
    }
  }
  .menu > div:nth-child(1) {
    position: relative;
    left: 10%;
  }
  .menu > div:nth-child(2) {
    position: relative;
    left: 5%;
  }
  .darkMode {
    font-size: 1.4rem;
  }
  .search {
    font-size: 1.4rem;
  }
  .login {
    width: 5rem;
    height: 2.2rem;
    background-color: white;
    color: black;
    border-radius: 1rem;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .writting {
    width: 7rem;
    height: 2rem;
    background-color: #121212;
    color: whitesmoke;
    border-radius: 1rem;
    border: 1px solid whitesmoke;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .user-menu {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  .login-img {
    width: 2.5rem;
    border-radius: 100%;
  }
  .down-arrow {
    font-size: 1.2rem;
    color: #acacac;
    :hover {
      color: #ececec;
    }
  }
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;

const SettingModal = styled.div`
  width: 12rem;
  position: absolute;
  z-index: 5;
  top: 4rem;
  right: 5%;
  background-color: #1e1e1e;
  line-height: 1.5;
  cursor: pointer;
  div {
    width: 100%;
    background-color: transparent;
    padding: 0.75rem 1rem;
  }
`;

export default Header;
