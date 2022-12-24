import React from "react";
import styled from "styled-components";
import logo from "../image/logo.webp";

const Header = () => {
  return (
    <Wrap>
      <div className="header">
        <div className="logo-img">
          <img src={logo} alt="logo" />
        </div>
        <div className="">
          <div>다크모드</div>
          <div>검색</div>
          <butto>로그인</butto>
        </div>
      </div>
    </Wrap>
  );
};

const Wrap = styled.section`
  height: 4rem;
  background-color: green;
  .header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header > .logo-img {
    width: 6rem;
    background-color: pink;
  }
  .header > .logo-img > img {
    width: 5rem;
  }
`;

export default Header;
