import React from "react";
import styled from "styled-components";
import FontEdit from "./FontEdit";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const PostForm = () => {
  return (
    <PostWrapper>
      <AddForm>
        <div className="postAdd-title">
          <input
            type="text"
            name="title"
            value=""
            placeholder="제목을 입력하세요"
          />
        </div>
        <div />
        <div className="postAdd-tag">
          <input
            type="text"
            name="tag"
            value=""
            placeholder="태그를 입력하세요"
          />
        </div>
        <FontEdit />
        <div className="postAdd-content">
          <input
            type="text"
            name="content"
            value=""
            placeholder="당신의 이야기를 적어보세요..."
          />
        </div>
        <div className="bottom">
          <div>
            <Link to={`/`}>
              <FiArrowLeft />
              <button>나가기</button>
            </Link>
          </div>
          <div>
            <button>출간하기</button>
          </div>
        </div>
      </AddForm>
    </PostWrapper>
  );
};

export default PostForm;

const PostWrapper = styled.div`
  padding: 40px 50px 0 50px;
  display: flex;
`;

const AddForm = styled.form`
  width: 100%;
`;
