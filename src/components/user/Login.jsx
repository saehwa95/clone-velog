import React, { useState } from "react";
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
  StLoginLink,
  StToggleButton,
} from "../../pages/LoginSignUp/style";
import { IoClose } from "react-icons/io5";
import kakao from "../../image/kakao.webp";
import github from "../../image/github.webp";
import facebook from "../../image/facebook.webp";
import { useDispatch } from "react-redux";
import { __loginUser } from "../../redux/modules/loginSlice";

const Login = (props) => {
  const dispatch = useDispatch();

  const [inputSignUp, setInputSignUp] = useState({
    email: "",
    password: "",
  });

  //로그인inputSignUp 스테이트 구조분해 할당(for 각 상태관리, 유효성검사)
  const { email, password } = inputSignUp;

  //로그인input창 상태관리를 위한 초기값 세팅
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  //정규식
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const regPassword = /^[A-Za-z0-9]{4,16}$/;

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputSignUp({ ...inputSignUp, [name]: value });

    if (name === "email") {
      if (!regEmail.test(value)) {
        setEmailInput("올바른 이메일 주소를 입력하세요");
        setIsEmail(false);
      } else {
        setEmailInput("");
        setIsEmail(true);
      }
    }

    if (name === "password") {
      if (!regPassword.test(value)) {
        setPasswordInput("영문,숫자 포함 4글자 이상입니다");
        setIsPassword(false);
      } else {
        setPasswordInput("");
        setIsPassword(true);
      }
    }
  };

  const loginHandler = () => {
    if (email.trim() === "" || password.trim() === "") {
      return alert("아이디랑 비밀번호를 입력해주세요!");
    }
    const payload = {
      email,
      password,
    };
    dispatch(__loginUser(payload));
    setInputSignUp({ email: "", password: "" });
  };

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
                <IoClose
                  style={{ fontSize: "20px" }}
                  onClick={props.toggleModal}
                />
              </StClose>
              <h2>로그인</h2>
              <h4>이메일로 로그인</h4>
              <STinputWrapper>
                <div>
                  <input
                    type="text"
                    name="email"
                    value={inputSignUp.email}
                    onChange={onChangeHandler}
                    placeholder="이메일을 입력하세요."
                  />
                </div>
                <div className="underCheck">{emailInput}</div>
                <h4>비밀번호</h4>
                <div>
                  <input
                    type="password"
                    name="password"
                    value={inputSignUp.password}
                    onChange={onChangeHandler}
                    placeholder="비밀번호를 입력하세요."
                  />
                </div>
                <div className="underCheck">{passwordInput}</div>
                <button
                  onClick={loginHandler}
                  disabled={!(isEmail && isPassword)}
                >
                  로그인
                </button>
                <h4>소셜 계정으로 로그인</h4>
                <StIconContainer>
                  <img src={kakao} alt="" />
                  <img src={github} alt="" />
                  <img src={facebook} alt="" />
                </StIconContainer>
                <StLoginLink>
                  <h4>
                    아직 회원이 아니신가요?
                    <StToggleButton
                      className="footerBtn"
                      // onClick={toggleHandler}
                    >
                      회원가입
                    </StToggleButton>
                  </h4>
                </StLoginLink>
              </STinputWrapper>
            </StInputContainer>
          </StModalBlock>
        </StModalBlockContainer>
      </StBackground>
    </StModalContainer>
  );
};

export default Login;
