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
import { useSelector } from "react-redux";

const Header = () => {
  const isLogin = false;
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  if (window.location.pathname === "/postadd") return null;
  if (window.location.pathname === "/postupdate") return null;

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && <LoginSignUp toggleModal={toggleModal} />}
      <Wrap>
        <div className="header">
          {window.location.pathname.indexOf("/postdetail") === 0 ? (
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
                jhchoi1182.log
              </div>
            </div>
          ) : (
            <div className="velog">
              <img
                className="logo"
                src={logo}
                alt="logo"
                onClick={() => navigate("/")}
              />
            </div>
          )}
          {isLogin ? (
            <div className="menu">
              <div>
                <IoMdMoon className="darkMode" />
              </div>
              <div>
                <CiSearch className="search" />
              </div>
              <button className="is-login" onClick={() => navigate("/postadd")}>
                새 글 작성
              </button>
              <img
                className="login-img"
                src="https://lh3.googleusercontent.com/a/AEdFTp48u_P5jsUApq_vhtxsyJi4vCSCN8MAK_ieJk5N=s288-p-rw-no-mo"
                alt=""
              />
              <IoMdArrowDropdown className="toggle" />
            </div>
          ) : (
            <div className="menu">
              <div>
                <IoMdMoon className="darkMode" />
              </div>
              <div>
                <CiSearch className="search" />
              </div>
              <button className="login" onClick={toggleModal}>
                로그인
              </button>
            </div>
          )}
        </div>
      </Wrap>
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
  .is-login {
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
  .login-img {
    width: 2.5rem;
    border-radius: 100%;
  }
  .toggle {
    font-size: 1.2rem;
    color: #acacac;
    margin-left: -0.5rem;
  }
`;

export default Header;
