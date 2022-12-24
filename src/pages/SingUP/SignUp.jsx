import React from "react";
import styled from "styled-components";
const SignUp = () => {
  return (
    <StModalContainer>
      <Background>
        <ModalBlock>
          <Contents>회원가입</Contents>
        </ModalBlock>
      </Background>
    </StModalContainer>
  );
};

const StModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(32, 31, 29, 0.137);
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 6.5rem;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: white;
  width: 60rem;
  @media (max-width: 606px) {
    width: 50rem;
  }
  @media (max-width: 50rem) {
    width: 80%;
  }
  min-height: 35rem;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default SignUp;
