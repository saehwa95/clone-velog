import React from "react";
import styled from "styled-components";
import info from '../image/info.webp'

const Main = () => {
  return (
    <Wrap>
      <Top>
        <div className="left-div">
          <div>
            <TopBtn>트렌딩</TopBtn>
            <TopBtn>최신</TopBtn>
          </div>
          <select>
            <option value={"오늘"}>오늘</option>
            <option value={"이번 주"} selected>이번 주</option>
            <option value={"이번 달"}>이번 달</option>
            <option value={"올해"}>올해</option>
          </select>
        </div> 
        <div>
          <img src={info} alt="info" />
        </div>
      </Top>
      
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
`
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
    background: #1E1E1E;
    color: #ECECEC;
    border: transparent;
    border-radius: 4px;
    height: 2rem;
    width: 6rem;
    font-size: 0.875rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-weight: 600;
    :hover {
      color: #D9D9D9;
    }
  }
`

const TopBtn = styled.button`
  background-color: transparent;
  border: transparent;
  color: #ACACAC;
  font-size: 1.125rem;
  width: 7rem;
  cursor: pointer;
  :hover{
    color: #ECECEC;
    font-weight: 700;
    border: 2px ;
    }
  :focus{
    color: #ECECEC;
    font-weight: 700;
    border: transparent;
		border-bottom: 2px solid #ECECEC;
  }
`

export default Main;
