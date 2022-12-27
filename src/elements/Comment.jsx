import React, { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineAddBox } from 'react-icons/md';


const Comment = () => {
  const [edit, setEdit] = useState("off")

  return (
    <>
      <CommentBox>
        <div className='user-info'>
          <div className='user-info'>
            <div>
              <img src="https://lh3.googleusercontent.com/a/AEdFTp48u_P5jsUApq_vhtxsyJi4vCSCN8MAK_ieJk5N=s288-p-rw-no-mo" alt="프로필 사진"/>
            </div>
            <div className='user-comment-info'>
              <div className='nick'>최지현</div>
              <label>2022년 12월 26일</label>
            </div>
          </div>
          <div>
            <label className='update' onClick={() => setEdit("on")}>수정</label>
            <label className='delete'>삭제</label>
          </div>
        </div>
        <ContentBox>
          <div className='content'>
            좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.좋은 글 감사합니다.
          </div>
          <div className='reply'>
            <MdOutlineAddBox className='add-reply' />
            <span>답글 달기</span>
          </div>
        </ContentBox>
      </CommentBox>    
    </>
  )
}

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
    color: #ACACAC;
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
`

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
    color: #96F2D7;
    gap: 0.3rem;
    cursor: pointer;
    :hover {
      color: #63E6BE;
    }
  }
  span {
    font-weight: 700;
  }
  .add-reply {
    font-size: 1rem;
  }
`

export default Comment