import React from "react";
import styled from "styled-components";
import logo from "../image/logo.webp";
import { useState } from "react";
import LoginSignUp from "../pages/LoginSignUp/LoginSignUp";
import { IoMdMoon } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
  const [modal, setModal] = useState(false);

  if (window.location.pathname === "/postadd") return null;
  if (window.location.pathname === "/postupdate") return null;
  

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && <LoginSignUp />}
      <Wrap>
      <div className="header">
        <img src={logo} alt="logo" />
        <div className="menu">
          <div>
            <IoMdMoon className="darkMode" />
          </div>
          <div>
            <CiSearch className="search" />
          </div>
          <button className="login" onClick={toggleModal}>로그인</button>
        </div>
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
  .header > img {
    width: 5rem;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 1rem;
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
      background-color: #2A2A2A;
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
`;

export default Header;
