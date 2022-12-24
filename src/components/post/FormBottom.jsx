import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { IoEarth } from "react-icons/io5";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormBottom = () => {
  const trueBtn = () => {};

  const falseBtn = () => {};

  return (
    <Container>
      <div className="priviate">
        <button onClick={trueBtn}>
          <IoEarth style={{ marginRight: "25px" }} />
          전체 공개
        </button>
        <button onClick={falseBtn}>
          <RiLock2Fill style={{ marginRight: "25px" }} />
          비공개
        </button>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <button>
              <FiArrowLeft style={{ marginRight: "8px" }} />
              나가기
            </button>
          </Link>
        </div>
        <div className="bottom-right">
          <p>임시저장</p>
          <button type="button">출간하기</button>
        </div>
      </div>
    </Container>
  );
};

export default FormBottom;

const Container = styled.div`
  width: 960px;
  position: fixed;
  bottom: 0;
`;
