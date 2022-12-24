import React from "react";
import styled from "styled-components";
import logo from "../image/logo.webp";
import darkMode from "../image/darkMode.webp";
import search from "../image/search.webp";

const Header = () => {
  return (
    <Wrap>
      <div className="header">
        <img src={logo} alt="logo" />
        <div className="menu">
          <img src={darkMode} alt="dark" />
          <img src={search} alt="search" />
          <butto className="login">로그인</butto>
        </div>
      </div>
    </Wrap>
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
  .menu > img:first-child {
    width: 1.5rem;
    cursor: pointer;
    :hover {
      width: 1.5;
      border-radius: 100%;
      background-color: pink;
    }
  }
  .menu > img:nth-child(2) {
    width: 1.5rem;
    cursor: pointer;
    :hover {
    }
  }
  .menu > .login {
    width: 5rem;
    height: 2rem;
    background-color: white;
    color: black;
    border-radius: 15px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export default Header;
