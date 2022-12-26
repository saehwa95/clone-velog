import styled from "styled-components";

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
  font-size: 1rem;
  color: #96f2d7 !important;
  background-color: black !important;
`;

export {
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
};
