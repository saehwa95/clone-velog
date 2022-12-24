import React from "react";
import { BsTypeBold, BsTypeItalic, BsImage } from "react-icons/bs";
import { CgFormatStrike, CgCode } from "react-icons/cg";
import { IoMdQuote } from "react-icons/io";
import { FiLink2 } from "react-icons/fi";
import styled from "styled-components";

const FontEdit = () => {
  return (
    <FontWrapper>
      <div className="font-size">
        H<span>1</span>
      </div>
      <div className="font-size">
        H<span>2</span>
      </div>
      <div className="font-size">
        H<span>3</span>
      </div>
      <div className="font-size">
        H<span>4</span>
      </div>
      <span className="division">ㅣ</span>
      <div>
        <BsTypeBold style={{ fontSize: "24px" }} />
      </div>
      <div>
        <BsTypeItalic style={{ fontSize: "24px" }} />
      </div>
      <div>
        <CgFormatStrike style={{ fontSize: "24px" }} />
      </div>
      <span className="division">ㅣ</span>
      <div>
        <IoMdQuote style={{ fontSize: "20px" }} />
      </div>
      <div>
        <FiLink2 style={{ fontSize: "20px" }} />
      </div>
      <div>
        <BsImage style={{ fontSize: "20px" }} />
      </div>
      <div>
        <CgCode style={{ fontSize: "24px" }} />
      </div>
    </FontWrapper>
  );
};

export default FontEdit;

const FontWrapper = styled.div`
  width: 699px;
  height: 48px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  gap: 25px;
  color: #ececec;
  font-weight: 600;
  cursor: pointer;
  .font-size span {
    font-size: 12px;
  }
  .division {
    font-weight: 100;
    opacity: 0.8;
  }
  div {
    align-items: center;
    width: 30px;
    height: 30px;
    :hover {
      background-color: #1e1e1e;
    }
  }
`;
