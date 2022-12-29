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
  top: 7rem;
  background-color: white;
  display: flex;
  animation: modal-show 0.4s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: 400px;
    }
    to {
      opacity: 1;
      margin-top: 0px;
    }
  }
`;

const StImgContainer = styled.div`
  width: 216px;
  height: 100%;
  background-color: #1e1e1e;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
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
  padding: 20px;
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
    width: 300px;
    padding: 10px;
    color: white;
    background-color: black;
    border: 1px solid #4d4d4d;
  }
  .emailInput {
    width: 220px !important;
    height: 10px !important;
  }
  .emailWrapper {
    display: flex !important;
    align-items: center !important;
  }
  .emailBtn {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 80px !important;
    height: 33px !important;
    margin-top: 0 !important;
  }
  .underCheck {
    font-size: 0.8rem;
    color: #acacac;
  }
  button {
    width: 150px;
    height: 37px;
    padding: 10px;
    margin-top: 20px;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  span {
    color: #96f2d7;
  }
  .footerBtn {
    width: 100px !important;
    height: 33px !important;
    margin-top: 0 !important;
  }
`;
const StLoginLink = styled.div`
  position: absolute;
  top: 500px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  span {
    color: #96f2d7;
  }
  .footerBtn {
    width: 100px !important;
    height: 33px !important;
    margin-top: 0 !important;
  }
`;
const StToggleButton = styled.button`
  outline: none !important;
  padding: 0px !important;
  border: none !important;
  display: inline !important;
  font-size: 1rem !important;
  line-height: 1.5 !important;
  color: #96f2d7 !important;
  background: none !important;
  cursor: pointer !important;
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
  StLoginLink,
  StToggleButton,
};
