import React from "react";
import { useState } from "react";
import {
  StModalContainer,
  StBackground,
  StModalBlockContainer,
  StModalBlock,
  StImgContainer,
  StImg,
  StWelcome,
  StInputContainer,
  StClose,
  STinputWrapper,
  StIconContainer,
  StLink,
  StToggleButton,
} from "./style";
import { IoClose } from "react-icons/io5";
import kakao from "../../image/kakao.webp";
import github from "../../image/github.webp";
import facebook from "../../image/facebook.webp";

const LoginSignUp = () => {
  const [toggleOn, setToggleOn] = useState(false);

  const toggleHandler = () => {
    setToggleOn(!toggleOn);
  };
  return (
    <>
      {toggleOn ? (
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
                  <h2>회원가입</h2>
                  <h4>이메일로 회원가입</h4>
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
                    <h4>닉네임</h4>
                    <div>
                      <input placeholder="닉네임을 입력하세요." />
                      <button>닉네임</button>
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
                        <StToggleButton onClick={toggleHandler}>
                          회원가입
                        </StToggleButton>
                      </h4>
                    </StLink>
                  </STinputWrapper>
                </StInputContainer>
              </StModalBlock>
            </StModalBlockContainer>
          </StBackground>
        </StModalContainer>
      ) : (
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
                        계정이 이미 있으신가요?
                        <StToggleButton onClick={toggleHandler}>
                          로그인
                        </StToggleButton>
                      </h4>
                    </StLink>
                  </STinputWrapper>
                </StInputContainer>
              </StModalBlock>
            </StModalBlockContainer>
          </StBackground>
        </StModalContainer>
      )}
    </>
  );
};

export default LoginSignUp;
