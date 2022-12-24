import React from "react";
import styled from "styled-components";
import Card from "../elements/Card";
import info from "../image/info.webp";

const Main = () => {
  return (
    <Wrap>
      <Top>
        <div className="left-div">
          <div>
            <TopBtn>트렌딩</TopBtn>
            <TopBtn>최신</TopBtn>
          </div>
          <select defaultValue={"이번 주"}>
            <option value={"오늘"}>오늘</option>
            <option value={"이번 주"}>이번 주</option>
            <option value={"이번 달"}>이번 달</option>
            <option value={"올해"}>올해</option>
          </select>
        </div>
        <div>
          <img src={info} alt="info" />
        </div>
      </Top>
      <CardBox>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardBox>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Top = styled.div`
  width: 90%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-div {
    display: flex;
    align-items: center;
    text-align: center;
  }
  .left-div > select {
    background: #1e1e1e;
    color: #d9d9d9;
    border: transparent;
    border-radius: 4px;
    height: 2rem;
    width: 6rem;
    font-size: 0.8em;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-weight: 600;
    :hover {
      color: #d9d9d9;
    }
  }
`;

const TopBtn = styled.button`
  background-color: transparent;
  border: transparent;
  color: #acacac;
  font-size: 1.125rem;
  width: 7rem;
  cursor: pointer;
  :hover {
    color: #ececec;
    font-weight: 700;
    border: 2px;
  }
  :focus {
    color: #ececec;
    font-weight: 700;
    border: transparent;
    border-bottom: 2px solid #ececec;
  }
`;

const CardBox = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`;

export default Main;
