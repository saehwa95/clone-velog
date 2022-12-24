import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import Card from "../elements/Card";
import info from "../image/info.webp";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlineAccessTime } from "react-icons/md";

const Main = () => {
  const onFocus = useRef()
  
  const onTrendingHandler = useCallback(() => {
    console.log(onFocus);
    console.log("hello world")
  }, [])

  useEffect(() => {
    onTrendingHandler()
  }, [])


  return (
    <Wrap>
      <Top>
        <div className="left-div">
          <div className="button-box">
            <TopBtn>
              <BiTrendingUp className="trending" onClick={onTrendingHandler} /> 
              <span>트렌딩</span>
            </TopBtn>
            <TopBtn>
              <MdOutlineAccessTime className="time" />
              <span>최신</span>
            </TopBtn>
          </div>
          <div className="select-box">
            <select defaultValue={"이번 주"}>
              <option value={"오늘"}>오늘</option>
              <option value={"이번 주"}>이번 주</option>
              <option value={"이번 달"}>이번 달</option>
              <option value={"올해"}>올해</option>
            </select>
          </div>
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
    gap: 0.45rem;
  }
  .button-box {
    display: flex;
    gap: 0.3rem;
  }
  .trending {
    font-size: 1.5rem;
  }
  .time {
    font-size: 1.5rem;
  }
  .select-box > select {
    background: #1e1e1e;
    color: #d9d9d9;
    border: transparent;
    border-radius: 4px;
    height: 2rem;
    width: 6rem;
    font-size: 0.9em;
    padding-left: 0.2rem;
    padding-right: 0.5rem;
    font-weight: 600;
    :hover {
      color: #d9d9d9;
    }
  }
`;

const TopBtn = styled.button.attrs((props) => ({
  autoFocus: props.autoFocus,
}))`
  background-color: transparent;
  border: transparent;
  color: #acacac;
  font-size: 1.125rem;
  width: 6.5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
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
`

export default Main;
