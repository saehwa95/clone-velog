import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { HiMail } from "react-icons/hi";
import Comment from "../elements/Comment";
import { IoHeartSharp } from "react-icons/io5";
import { BsShareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { __getDetail } from "../redux/modules/postSlice";
import { __addComment } from "../redux/modules/commentSlice";

const PostDetail = () => {
  
  const [enteredComment, setEnteredComment] = useState("");
  const isLoding = useSelector(state => state.postSlice.isLoding)
  const detail = useSelector(state => state.postSlice.detail.post)
  const date = detail?.createdAt.split('T')[0].split('-')
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {id} = useParams()
  
  console.log(detail);

  const onEnteredCommentHandler = (event) => {
    setEnteredComment(event.target.value);
  };

  const onSubmitHandler = () => {
    dispatch(__addComment({id, enteredComment}))
  };

  useEffect(() => {
    dispatch(__getDetail(id))
  },[isLoding])

  return (
    <Wrap>
      <div className="center-div">
        <ContentsBox>
          <h1>{detail?.title}</h1>
          <div className="writing-info">
            <div>
              <span className="top-nick">{detail?.user.userName}</span> · <label>{date}</label>

            </div>
            <div className="modification">
              <label>통계 </label>
              <label onClick={() => navigate("/postupdate")}>수정 </label>
              <label>삭제 </label>
            </div>
          </div>
          <div className="content">{detail?.content}</div>
        </ContentsBox>
        <UserBox>
          <div>
            <img src="https://lh3.googleusercontent.com/a/AEdFTp48u_P5jsUApq_vhtxsyJi4vCSCN8MAK_ieJk5N=s288-p-rw-no-mo" alt="프로필 사진" />
          </div>
          <div className="user-info">
            <div className="bottom-nick">{detail?.user.userName}</div>
            <div className="intro">안녕하세요</div>
          </div>
        </UserBox>
        <CommentsBox>
          <div className="contact">
            <HiMail className="email" />
          </div>
          <div className="comment-input">
            <div>
              <h3>{detail?._count.comments ? detail?._count.comments : 0}개의 댓글</h3>
            </div>
            <div>
              <textarea placeholder="댓글을 작성하세요" type="text" name="contents" value={enteredComment} onChange={onEnteredCommentHandler} required></textarea>
            </div>
            <div>
              <button className="input-btn" onClick={onSubmitHandler}>댓글 작성</button>
            </div>
          </div>
          <div className="comment">
            <Comment />
          </div>
          <div className="copyright">
            <div>
              <a href="https://stellate.co/?ref=powered-by">
                <img src="https://graphcdn.io/badge-light.svg" alt="저작권" />
              </a>
            </div>
          </div>
        </CommentsBox>
      </div>
      <FixDiv>
        <div className="hart-box">
          <IoHeartSharp className="heart" />
        </div>
        <div className="likes-number">77</div>
        <div className="share-box">
          <BsShareFill className="share" />
        </div>
      </FixDiv>
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  .center-div {
    max-width: 49rem;
    width: 95%;
    margin-top: 3.3rem;
  }
  .copyright {
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const ContentsBox = styled.div`
  h1 {
    font-size: 3rem;
  }
  .writing-info {
    display: flex;
    justify-content: space-between;
  }
  .writing-info > label {
    color: #acacac;
  }
  .top-nick {
    font-weight: 1000;
    :hover {
      text-decoration: underline;
    }
  }
  .modification {
    gap: 1rem;
    margin-right: 1rem;
  }
  .modification > label {
    color: #acacac;
    cursor: pointer;
    :hover {
      color: #d9d9d9;
    }
  }
  .content {
    margin-top: 6.3rem;
    font-size: 1.1rem;
  }
`;

const UserBox = styled.div`
  margin-top: 14rem;
  display: flex;
  align-items: center;
  height: 11rem;
  border: transparent;
  border-bottom: 1px solid #252525;
  img {
    width: 8rem;
    border-radius: 100%;
  }
  .user-info {
    margin-left: 1rem;
  }
  .bottom-nick {
    font-size: 1.5rem;
    font-weight: 1000;
    height: 2rem;
    margin-bottom: 0.5rem;
  }
  .intro {
    width: 100%;
    font-size: 1.1rem;
    height: 1.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;

const CommentsBox = styled.div`
  margin-top: 1.4rem;
  .contact {
    display: flex;
  }
  .email {
    font-size: 2.3rem;
    color: #acacac;
    cursor: pointer;
    :hover {
      color: #ececec;
    }
  }
  .comment-input {
    margin-top: 3rem;
  }
  textarea {
    resize: none;
    width: 95%;
    height: 3rem;
    padding: 1rem 1rem 1.5rem;
    line-height: 1.75;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    background-color: #1e1e1e;
    border: 1px solid #2a2a2a;
    color: #ececec;
    outline: none;
  }
  .input-btn {
    float: right;
    border: none;
    background-color: #96f2d7;
    color: #121212;
    border-radius: 4px;
    height: 2rem;
    padding: 0px 1.25rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    :hover {
      background-color: #63e6be;
    }
  }
  .comment {
    margin-top: 7rem;
    margin-bottom: 7rem;
  }
`;

const FixDiv = styled.div`
  background-color: #1e1e1e;
  border: 1px solid #2a2a2a;
  border-radius: 2rem;
  width: 3rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  top: 30%;
  left: 23%;
  .hart-box {
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1e1e1e;
    border: 1px solid #4d4d4d;
    border-radius: 1.5rem;
    color: #acacac;
    cursor: pointer;
    :hover {
      border: 1px solid whitesmoke;
    }
  }
  .heart {
    font-size: 1.9rem;
  }
  .likes-number {
    margin-top: 0.5rem;
    color: #d9d9d9;
    line-height: 1;
    font-size: 0.75rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  .share-box {
    height: 3rem;
    width: 3rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: #1e1e1e;
    border: 1px solid #4d4d4d;
    border-radius: 1.5rem;
    color: #acacac;
    cursor: pointer;
    :hover {
      border: 1px solid whitesmoke;
    }
  }
  .share {
    font-size: 1.5rem;
  }
`;

export default PostDetail;
