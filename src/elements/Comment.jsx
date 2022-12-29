import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineAddBox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  __deleteComment,
  __updateComment,
} from "../redux/modules/commentSlice";

const Comment = ({ comment }) => {
  const error = useSelector(state => state.commentSlice.error)
  const [enteredComment, setEnteredComment] = useState("");
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const onEditHandler = () => {
    dispatch(__updateComment({ id: comment.commentId, content: enteredComment }));
    setEdit(false);
  };

  const onEnteredCommentHandler = (event) => {
    setEnteredComment(event.target.value);
  };

  const startEditHandler = () => {
    setEdit(true);
    setEnteredComment();
  };

  const loginUserId = localStorage.getItem('userId')
  const date = comment?.createdAt.split("T")[0].split("-");

  return (
    <>
      <CommentBox>
        <div className="user-info">
          <div className="user-info">
            <div>
              <img
                src={comment?.user.profileImae}
                alt="프로필 사진"
              />
            </div>
            <div className="user-comment-info">
              <div className="nick">{comment?.user.userName}</div>
              <label>{date}</label>
            </div>
          </div>
          {comment.user.userId === loginUserId && (
            <div>
              {edit ? null : (
                <label className="update" onClick={startEditHandler}>
                  수정
                </label>
              )}
              <label
                className="delete"
                onClick={() => dispatch(__deleteComment(comment.commentId))}
              >
                삭제
              </label>
            </div>
          )}
          {comment.user.userId !== loginUserId && null}
        </div>
        <ContentBox>
          {edit ? (
            <div>
              <div>
                <textarea
                  placeholder="댓글을 작성하세요"
                  type="text"
                  name="contents"
                  value={enteredComment}
                  onChange={onEnteredCommentHandler}
                  required
                ></textarea>
              </div>
              <div className="update-area">
                <button className="cancel" onClick={() => setEdit(false)}>
                  취소
                </button>
                <button className="input-btn" onClick={onEditHandler}>
                  댓글 수정
                </button>
              </div>
            </div>
          ) : (
            <div className="content">{comment?.content}</div>
          )}
          <div className="reply">
            <MdOutlineAddBox className="add-reply" />
            <span>답글 달기</span>
          </div>
        </ContentBox>
      </CommentBox>
    </>
  );
};

const CommentBox = styled.div`
  border: transparent;
  border-bottom: 1px solid #252525;
  padding-bottom: 1.6rem;
  margin-bottom: 2rem;
  .user-info {
    height: 5rem;
    margin-top: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 3.6rem;
    border-radius: 100%;
  }
  .user-comment-info {
    margin-left: 1rem;
  }
  .nick {
    font-weight: 1000;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  label {
    font-size: 0.9rem;
    color: #acacac;
  }
  .update {
    margin-right: 0.5rem;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .delete {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

const ContentBox = styled.div`
  margin-top: 1.5rem;
  .content {
    font-size: 1.125rem;
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
  .reply {
    margin-top: 2.3rem;
    display: flex;
    align-items: center;
    color: #96f2d7;
    gap: 0.3rem;
    cursor: pointer;
    :hover {
      color: #63e6be;
    }
  }
  span {
    font-weight: 700;
  }
  .add-reply {
    font-size: 1rem;
  }
  .update-area {
    display: flex;
    float: right;
  }
  .cancel {
    width: 5rem;
    color: #96f2d7;
    background-color: transparent;
    border: none;
    height: 2rem;
    font-weight: 700;
    font-size: 1rem;
    margin-right: 1rem;
    border-radius: 4px;
    :hover {
      background-color: #2a2a2a;
    }
  }
  .input-btn {
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
`;

export default Comment;
