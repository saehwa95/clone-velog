import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import kakao from "../image/kakao.webp";
import github from "../image/github.webp";
import facebook from "../image/facebook.webp";

const SignIn = () => {
  return (
    <StModalContainer>
      <StBackground>
        <StModalBlockContainer>
          <StModalBlock>
            <StImgContainer>
              <StImg
                src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
                alt="welcome"
              />
              <StWelcome>환영합니다!</StWelcome>
            </StImgContainer>
            <StInputContainer>
              <StClose>
                <IoClose style={{ fontSize: "20px" }} />
              </StClose>
              <h2>로그인</h2>
              <h4>이메일로 로그인</h4>
              <STinputWrapper>
                <div>
                  <input placeholder="이메일을 입력하세요." />
                  <button>로그인</button>
                </div>
                <h4>비밀번호</h4>
                <div>
                  <input placeholder="비밀번호를 입력하세요." />
                  <button>비밀번호</button>
                </div>
                <h4>소셜 계정으로 로그인</h4>
                <StIconContainer>
                  <img src={kakao} />
                  <img src={github} />
                  <img src={facebook} />
                </StIconContainer>
                <StLink>
                  <h4>
                    아직 회원이 아니신가요?
                    <StToggleButton>회원가입</StToggleButton>
                  </h4>
                </StLink>
              </STinputWrapper>
            </StInputContainer>
          </StModalBlock>
        </StModalBlockContainer>
      </StBackground>
    </StModalContainer>
  );
};

const StModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 20;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StModalBlockContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StModalBlock = styled.div`
  position: relative;
  width: 38rem;
  min-height: 34rem;
  top: 10rem;
  background-color: white;
  display: flex;
  animation: modal-show 0.7s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: 400px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const StImgContainer = styled.div`
  width: 216px;
  height: 100%;
  background-color: #1e1e1e;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StImg = styled.img`
  width: 168px;
  height: 108px;
`;
const StWelcome = styled.div`
  font-size: 1.75rem;
  margin-top: 1.5rem;
  color: white;
  text-align: center;
  font-weight: 600;
`;
const StInputContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  color: white;
  background-color: #121212;
  h2,
  h4 {
    color: #acacac;
  }
`;
const StClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const STinputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  input {
    width: 200px;
    padding: 10px;
    background-color: black;
    border: 1px solid #4d4d4d;
  }
  button {
    width: 100px;
    height: 37px;
    padding: 10px;
    border: none;
    background-color: #96f2d7;
    color: #121212;
    font-weight: 600;
    cursor: pointer;
  }
`;
const StIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    width: 50px;
    height: 50px;
  }
`;
const StLink = styled.div`
  position: absolute;
  top: 530px;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  span {
    color: #96f2d7;
  }
`;
const StToggleButton = styled.button`
  border: none;
  background-color: black;
`;
export default SignIn;
