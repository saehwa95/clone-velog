import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  StLoginLink,
  StToggleButton,
} from "./style";
import { IoClose } from "react-icons/io5";
import kakao from "../../image/kakao.webp";
import github from "../../image/github.webp";
import facebook from "../../image/facebook.webp";
import defaultProfile from "../../image/defaultProfile.webp";
import { useNavigate } from "react-router-dom";

import {
  __dupEmail,
  __loginUser,
  __signUpUser,
} from "../../redux/modules/loginSlice";

const LoginSignUp = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputSignUp, setInputSignUp] = useState({
    email: "",
    userName: "",
    password: "",
    passwordConfirm: "",
  });

  //모달 토글
  const [toggleOn, setToggleOn] = useState(false);
  const toggleHandler = () => {
    setToggleOn(!toggleOn);
  };

  //이미지 state생성
  const [profileImg, setProfileImg] = useState();
  const fileInput = useRef(null);

  //이미지 변경
  const profileImgChangeHandler = (e) => {
    if (e.target.files[0]) {
      setProfileImg(e.target.files[0]);
    } else {
      setProfileImg(profileImg);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  //회원가입inputSignUp 스테이트 구조분해 할당(for 각 상태관리, 유효성검사)
  const { userName, email, password, passwordConfirm } = inputSignUp;

  //회원가입input창 상태관리 위해 초기값 세팅
  const [userNameInput, setUserNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmInput, setPasswordConfirmInput] = useState("");

  const [isUserName, setIsUserName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  //정규식
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const regPassword = /^[A-Za-z0-9]{4,16}$/;
  const regUserName = /^[A-Za-z가-힣]{1,20}$/;

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

    if (name === "userName") {
      if (!regUserName.test(value)) {
        setUserNameInput("");
        setIsUserName(false);
      } else {
        setUserNameInput("");
        setIsUserName(true);
      }
    }

    if (name === "password") {
      if (!regPassword.test(value)) {
        setPasswordInput("16글자 이내입니다");
        setIsPassword(false);
      } else {
        setPasswordInput("");
        setIsPassword(true);
      }
    }

    if (name === "passwordConfirm") {
      if (password !== value) {
        setPasswordConfirmInput("비밀번호 확인이 일치하지 않습니다");
        setIsPasswordConfirm(false);
      } else {
        setPasswordConfirmInput("");
        setIsPasswordConfirm(true);
      }
    }
  };

  const signUpHandler = () => {
    if (
      email.trim() === "" ||
      userName.trim() === "" ||
      password.trim() === "" ||
      passwordConfirm.trim() === ""
    ) {
      return alert("회원가입에 필요한 정보를 입력해주세요!");
    }

    let formData = new FormData();
    formData.append("email", inputSignUp.email);
    formData.append("password", inputSignUp.password);
    formData.append("userName", inputSignUp.userName);
    formData.append("profileImage", profileImg);

    dispatch(__signUpUser(formData));

    setInputSignUp({
      email: "",
      userName: "",
      password: "",
      passwordConfirm: "",
    });
    setProfileImg("");
  };

  const dupEmail = () => {
    dispatch(__dupEmail({ email: inputSignUp.email }));
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

  const isSignUp = useSelector((state) => state.loginSlice.isSignUp);
  const dupCheck = useSelector((state) => state.loginSlice.dupCheck);
  const isLogin = useSelector((state) => state.loginSlice.isLogin);

  useEffect(() => {
    if (!isSignUp) return;
    if (isSignUp) {
      setToggleOn(!toggleOn);
    }
  }, [isSignUp]);

  useEffect(() => {
    if (!isLogin) return;
    if (isLogin) {
      alert("로그인 성공했습니다");
      props.toggleModal(false);
      navigate("/");
    }
  }, [isLogin]);

  const check = inputSignUp.email;
  const Length = inputSignUp.password.length;

  const signUpValidation = React.useMemo(() => {
    if (inputSignUp.email.indexOf("@") === -1) {
      return false;
    } else if (Length > 16) {
      return false;
    } else if (inputSignUp.password !== inputSignUp.passwordConfirm) {
      return false;
    } else if (dupCheck === false) {
      return false;
    } else if (inputSignUp.userName === "") {
      return false;
    } else {
      return true;
    }
  }, [inputSignUp, dupCheck]);
  console.log(signUpValidation);
  return (
    <>
      {toggleOn ? (
        <StModalContainer>
          <StBackground>
            <StModalBlockContainer>
              <StModalBlock>
                <StImgContainer>
                  <StImg
                    style={{ cursor: "pointer" }}
                    src={profileImg ? profileImg : defaultProfile}
                    onClick={() => {
                      fileInput.current.click();
                    }}
                  />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    name="profileImage"
                    onClick={(e) => {
                      e.target.value = null;
                    }}
                    onChange={profileImgChangeHandler}
                    ref={fileInput}
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
                  <h2>회원가입</h2>
                  <h4>이메일로 회원가입</h4>
                  <STinputWrapper>
                    <div className="emailWrapper">
                      <input
                        className="emailInput"
                        type="text"
                        name="email"
                        value={inputSignUp.email || ""}
                        onChange={onChangeHandler}
                        placeholder="이메일을 입력하세요."
                      />
                      <button
                        className="emailBtn"
                        onClick={dupEmail}
                        disabled={
                          // validation
                          inputSignUp.email.indexOf("@") === -1 ? true : false
                        }
                      >
                        중복 확인
                      </button>
                    </div>
                    <div className="underCheck">{emailInput}</div>
                    <h4>비밀번호</h4>
                    <div>
                      <input
                        type="password"
                        name="password"
                        value={inputSignUp.password || ""}
                        onChange={onChangeHandler}
                        placeholder="비밀번호를 입력하세요."
                      />
                    </div>
                    <div className="underCheck">{passwordInput}</div>
                    <h4>비밀번호 재확인</h4>
                    <div>
                      <input
                        type="password"
                        name="passwordConfirm"
                        value={inputSignUp.passwordConfirm || ""}
                        onChange={onChangeHandler}
                        placeholder="비밀번호를 확인하세요."
                      />
                    </div>
                    <div className="underCheck">{passwordConfirmInput}</div>
                    <h4>닉네임</h4>
                    <div>
                      <input
                        type="text"
                        name="userName"
                        value={inputSignUp.userName || ""}
                        onChange={onChangeHandler}
                        placeholder="닉네임을 입력하세요."
                      />
                    </div>
                    <div className="underCheck">{userNameInput}</div>
                    <button
                      onClick={signUpHandler}
                      disabled={!signUpValidation}
                    >
                      회원가입
                    </button>
                    <h4>소셜 계정으로 로그인</h4>
                    <StIconContainer>
                      <img src={kakao} alt="kakao" />
                      <img src={github} alt="github" />
                      <img src={facebook} alt="facebook" />
                    </StIconContainer>
                    <StLink>
                      <h4>
                        계정이 이미 있으신가요?
                        <StToggleButton
                          className="footerBtn"
                          onClick={toggleHandler}
                        >
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
                          onClick={toggleHandler}
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
      )}
    </>
  );
};

export default React.memo(LoginSignUp);
