import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  __editUserDetail,
  __updateUserName,
  __updateUserImg,
} from "../../redux/modules/loginSlice";

const UserInfo = () => {
  const dispatch = useDispatch();
  const [tittleBtnToggle, setTittleBtnToggle] = useState(false);
  const [contentBtnToggle, SetContentBtnToggle] = useState(false);

  const detail = useSelector((state) => state.loginSlice.detail);

  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const userId = localStorage.getItem("userId");
  const profileImage = localStorage.getItem("profileImage");
  const onEditChangHandler = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const onEditComplete = () => {
    dispatch(
      __updateUserName({
        userId: Number(userId),
        userName: input.userName,
      })
    );
    setTittleBtnToggle(false);
  };

  useEffect(() => {
    dispatch(__editUserDetail(+userId)).then((res) => {
      setEmail(res.payload.email);
      setUserName(res.payload.userName);
      setProfileImg(res.payload.profileImg);
    });
  }, []);

  //이름 수정 토글
  const titleBtnHandler = () => {
    setTittleBtnToggle(!tittleBtnToggle);
  };

  //닉네임 수정 토글
  const contentBtnToggleHandler = () => {
    SetContentBtnToggle(!contentBtnToggle);
  };

  //이미지 state생성
  const [editProfileImg, setEditProfileImg] = useState(); // 미리보기용
  const [updateImgData, setUpdateImgData] = useState(); // 서버에대 보내줄 데이터
  const fileInput = useRef(null);

  //이미지 변경
  const profileImgChangeHandler = (e) => {
    if (e.target.files[0]) {
      setUpdateImgData(e.target.files[0]);
    } else {
      setEditProfileImg(editProfileImg);
      return;
    }

    /* 미리보기를 해주고싶다. reader 객체로 뺌 */
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setEditProfileImg(reader.result); // 화면에 보여주고싶은 친구
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onEditProfileImg = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("userId", Number(userId));
    form.append("imageUrl", profileImage);
    form.append("profileImage", updateImgData);
    dispatch(__updateUserImg(form));
  };

  return (
    <>
      <StMainContainer>
        <StContainer>
          <StHeaderContainer>
            <StImgContainer>
              <img
                src={editProfileImg ? editProfileImg : detail.profileImage}
                alt="userImg"
              />
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                name="profileImage"
                onClick={(e) => (e.target.value = "")}
                onChange={profileImgChangeHandler}
                ref={fileInput}
              />
              <StUploadBtn
                onClick={() => {
                  fileInput.current.click();
                }}
              >
                이미지 업로드
              </StUploadBtn>
              <StSaveBtn onClick={onEditProfileImg}>이미지 저장</StSaveBtn>
            </StImgContainer>
            {tittleBtnToggle ? (
              <StInfoArea>
                <h2>닉네임</h2>
                <input
                  className="editIntro"
                  type="text"
                  name="userName"
                  value={input.userName || ""}
                  onChange={onEditChangHandler}
                  placeholder="닉네임"
                ></input>
                <div className="editBtnArea">
                  <button className="editBtn" onClick={onEditComplete}>
                    저장
                  </button>
                  <button className="editBtn" onClick={titleBtnHandler}>
                    취소
                  </button>
                </div>
              </StInfoArea>
            ) : (
              <StInfoArea>
                <h2>닉네임</h2>
                <h4>{detail.userName}</h4>
                <button onClick={titleBtnHandler}>수정</button>
              </StInfoArea>
            )}
          </StHeaderContainer>
          <StBodyContainer>
            <StBodyWrapper>
              {contentBtnToggle ? (
                <StBodyContentBox>
                  <h3>이메일</h3>

                  <input
                    className="editContent"
                    placeholder="이메일 주소"
                  ></input>
                  <button
                    className="editContentBtn"
                    onClick={contentBtnToggleHandler}
                  >
                    저장
                  </button>
                </StBodyContentBox>
              ) : (
                <StBodyContentBox>
                  <h3>이메일</h3>

                  <StEditTitle>{detail.email}</StEditTitle>
                </StBodyContentBox>
              )}

              <div className="textColor">
                회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.
              </div>
            </StBodyWrapper>

            <StBodyWrapper>
              <StBodyContentBox>
                <h3>소셜 정보</h3>
                <button className="marginbtn">정보 추가</button>
              </StBodyContentBox>
              <div className="textColor">
                포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.
              </div>
            </StBodyWrapper>
            <StBodyWrapper>
              <StBodyContentBox>
                <h3>벨로그 제목</h3>
                <StEditTitle>onBoard</StEditTitle>
              </StBodyContentBox>
              <div className="textColor">
                회원가입시 나타나는 페이지 제목입니다.
              </div>
            </StBodyWrapper>
            <StBodyWrapper>
              <StBodyContentBox>
                <h3>회원 탈퇴</h3>
                <StUserDeleteBtn>회원 탈퇴</StUserDeleteBtn>
              </StBodyContentBox>
              <div className="textColor">
                탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지
                않습니다.
              </div>
            </StBodyWrapper>
          </StBodyContainer>
        </StContainer>
      </StMainContainer>
    </>
  );
};

const StMainContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StContainer = styled.div`
  width: 768px;
  height: 100%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StHeaderContainer = styled.div`
  width: 768px;
  height: 220px;
  display: flex;
`;
const StImgContainer = styled.div`
  width: 30%;
  height: 100%;
  padding-right: 1.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
  }
`;
const StUploadBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 141px;
  height: 32px;
  padding: 10px;
  background-color: #96f2d7;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
  text-align: center;
`;
const StSaveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 141px;
  height: 32px;
  padding: 10px;
  color: #96f2d7;
  background-color: #121212;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
  text-align: center;
`;
const StInfoArea = styled.div`
  width: 100%;
  height: 220px;
  padding-left: 1.7rem;
  border-left: 1px solid #2a2a2a;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 2.25rem;
  }
  h4 {
    color: #acacac;
    font-size: 1rem;
  }
  button {
    outline: none;
    padding: 0px;
    border: none;
    display: inline;
    font-size: 1rem;
    line-height: 1.5;
    color: #96f2d7;
    text-decoration: underline;
    background: none;
    cursor: pointer;
  }
  .editIntro {
    width: 530px;
    height: 20px;
    padding: 0.5rem;
    margin-top: 1rem;
    color: white;
    outline: none;
    border: 1px solid #2a2a2a;
    background-color: #1e1e1e;
  }
  .editBtnArea {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 10px;
  }
  .editBtn {
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    font-weight: bold !important;
    cursor: pointer !important;
    outline: none !important;
    border: none !important;
    background: #96f2d7 !important;
    color: #121212 !important;
    border-radius: 4px !important;
    padding: 0px 1.25rem !important;
    height: 2rem !important;
    font-size: 1rem !important;
    text-decoration: none !important;
  }
`;
const StBodyContainer = styled.div`
  width: 768px;
  height: 461px;
  margin-top: 3.5rem;

  button {
    outline: none;
    padding: 0px;
    border: none;
    display: inline;
    font-size: 1rem;
    line-height: 1.5;
    color: #96f2d7;
    text-decoration: underline;
    background: none;
    cursor: pointer;
  }
  .textColor {
    color: #acacac;
    font-size: 0.875rem;
    margin-bottom: 10px;
  }
  .editContent {
    width: 500px;
    height: 15px;
    padding: 0.5rem;
    margin-left: 2rem;
    margin-top: 0.8rem;
    color: white;
    outline: none;
    border: 1px solid #2a2a2a;
    background-color: #1e1e1e;
  }
  .editContentBtn {
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    font-weight: bold !important;
    cursor: pointer !important;
    outline: none !important;
    border: none !important;
    background: #96f2d7 !important;
    color: #121212 !important;
    border-radius: 4px !important;
    padding: 0px 1.25rem !important;
    margin-left: 1rem !important;
    margin-top: 0.8rem !important;
    height: 2rem !important;
    font-size: 1rem !important;
    text-decoration: none !important;
  }
`;
const StBodyContentBox = styled.div`
  width: 768px;
  height: 91px;
  display: flex;
  align-items: center;
  h3 {
    font-size: 1.125rem;
  }
  .marginbtn {
    margin-left: 50px;
  }
  .divColumn {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    gap: 8px;
  }
`;
const StEditTitle = styled.div`
  width: 568px;
  height: 24px;
  color: #acacac;
  font-size: 1rem;
  margin-left: 50px;
`;
const StUserDeleteBtn = styled.button`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-weight: bold !important;
  cursor: pointer !important;
  outline: none !important;
  border: none !important;
  background-color: #ffc9c9 !important;
  color: #121212 !important;
  border-radius: 4px !important;
  padding: 0px 1.25rem !important;
  height: 2rem !important;
  font-size: 1rem !important;
  margin-left: 20px;
  text-decoration: none !important;
`;
const StBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #2a2a2a;
`;
export default UserInfo;
