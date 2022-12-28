import React from "react";
import { useState, useRef } from "react";
import signUpUser from "../../redux/modules/loginSlice";
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
} from "../../pages/LoginSignUp/style";
import { IoClose } from "react-icons/io5";
import kakao from "../../image/kakao.webp";
import github from "../../image/github.webp";
import facebook from "../../image/facebook.webp";

const SignUp = (props) => {
  //회원가입inputSignUp state 생성
  const [inputSignUp, setInputSignUp] = useState({
    email: "",
    userName: "",
    password: "",
    passwordConfirm: "",
  });

  //이미지 state생성
  const [profileImg, setProfileImg] = useState("");
  const fileInput = useRef(null);

  // dataURL을 Blob으로 변환
  const dataURItoBlob = (dataURI) => {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);
    return new Blob([ia], { type: mimeString });
  };

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

  //모달 토글
  const [toggleOn, setToggleOn] = useState(false);
  const toggleHandler = () => {
    setToggleOn(!toggleOn);
  };

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
        setUserNameInput("닉네임은 20글자 이내입니다");
        setIsUserName(false);
      } else {
        setUserNameInput("");
        setIsUserName(true);
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
    const blob = dataURItoBlob(profileImg);
    let formData = new FormData();
    formData.append("email", inputSignUp.email);
    formData.append("password", inputSignUp.password);
    formData.append("userName", inputSignUp.userName);
    formData.append("profileImage", blob, "img.file");
    // blob.size > 20 && formData.append("image", blob, "img.file");

    dispatchEvent(signUpUser(formData));
    setInputSignUp({
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
      profileImg: null,
    });
  };

  return (
    <StModalContainer>
      <StBackground>
        <StModalBlockContainer>
          <StModalBlock>
            <StImgContainer>
              <StImg
                style={{ cursor: "pointer" }}
                src={
                  profileImg
                    ? profileImg
                    : "https://addonshop.kr/common/img/default_profile.png"
                }
                onClick={() => {
                  fileInput.current.click();
                }}
              />
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                name="profileImage"
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
                    value={inputSignUp.email}
                    onChange={onChangeHandler}
                    placeholder="이메일을 입력하세요."
                  />
                  <button className="emailBtn">중복 확인</button>
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
                <h4>비밀번호 재확인</h4>
                <div>
                  <input
                    type="password"
                    name="passwordConfirm"
                    value={inputSignUp.passwordConfirm}
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
                    value={inputSignUp.userName}
                    onChange={onChangeHandler}
                    placeholder="닉네임을 입력하세요."
                  />
                </div>
                <div className="underCheck">{userNameInput}</div>
                <button
                  onClick={signUpHandler}
                  disabled={
                    !(isEmail && isPassword && isPasswordConfirm && isUserName)
                  }
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
  );
};

export default SignUp;
