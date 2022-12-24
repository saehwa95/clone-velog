import React from "react";
import { BsTypeBold, BsTypeItalic, BsImage } from "react-icons/bs";
import { CgFormatStrike, CgCode } from "react-icons/cg";
import { IoMdQuote } from "react-icons/io";
import { FiLink2 } from "react-icons/fi";
import styled from "styled-components";

const FontEdit = () => {
  return (
    <FontWrapper>
      <div className="div-box">
        <div className="font-size">
          H<span>1</span>
        </div>
      </div>
      <div className="div-box">
        <div className="font-size">
          H<span>2</span>
        </div>
      </div>
      <div className="div-box">
        <div className="font-size">
          H<span>3</span>
        </div>
      </div>
      <div className="div-box">
        <div className="font-size">
          H<span>4</span>
        </div>
      </div>
      <span className="division">ㅣ</span>
      <div className="div-box">
        <BsTypeBold style={{ fontSize: "24px" }} />
      </div>
      <div className="div-box">
        <BsTypeItalic style={{ fontSize: "24px" }} />
      </div>
      <div className="div-box">
        <CgFormatStrike style={{ fontSize: "24px" }} />
      </div>
      <span className="division">ㅣ</span>
      <div className="div-box">
        <IoMdQuote style={{ fontSize: "20px" }} />
      </div>
      <div className="div-box">
        <FiLink2 style={{ fontSize: "20px" }} />
      </div>
      <div className="div-box">
        <label>
          <BsImage style={{ fontSize: "20px" }} />
          <input type="file" accept="image/*" required/>
        </label>
      </div>
      <div className="div-box">
        <CgCode style={{ fontSize: "24px" }} />
      </div>
    </FontWrapper>
  );
};

export default FontEdit;

const FontWrapper = styled.div`
  width: 699px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ececec;
  font-weight: 600;
  cursor: pointer;
  .division {
    font-weight: 100;
    opacity: 0.8;
  }
  .font-size span {
    font-size: 10px;
  }
  .div-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    :hover {
      background-color: #1e1e1e;
    }
  }
  input {
    cursor: pointer;
    display: none;
  }
`;
