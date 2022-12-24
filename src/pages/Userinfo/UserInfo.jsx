import React from "react";
import styled from "styled-components";

const UserInfo = () => {
  return (
    <>
      <StMainContainer>
        <StContainer>
          <StHeaderContainer>
            <StImgContainer>
              <img
                src="http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                alt="userImg"
              />
              <StUploadBtn>이미지 업로드</StUploadBtn>
              <StDeleteBtn>이미지 제거</StDeleteBtn>
            </StImgContainer>
          </StHeaderContainer>
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
  background-color: gray;
  margin-top: 30px;
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StHeaderContainer = styled.div`
  background-color: green;
  width: 100%;
  height: 26%;
`;
const StImgContainer = styled.div`
  width: 25%;
  height: 100%;
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
const StDeleteBtn = styled.button`
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
export default UserInfo;
