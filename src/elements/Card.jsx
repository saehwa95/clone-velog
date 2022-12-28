import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IoHeartSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __getDetail } from '../redux/modules/postSlice';

const Card = ({post}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch

  const {content, createdAt, postId, title} = post
  const date = createdAt.split('T')[0].split('-')

  const onDetailChange = () => {
    // dispatch(__getDetail(postId))
    navigate(`/postdetail/${postId}`)
  }

  return (
    <VCard onClick={onDetailChange} >
    <img className='thumbnail' src={postImage} alt="메리크리스마스" />
    <Contents>
      <h4>{title}</h4>
      <p>{content}</p>
    </Contents>
    <Date>
      <label>{`${date[0]}년 ${date[1]}월 ${date[2]}일`} · {post._count.comments ? post._count.comments : 0}개의 댓글</label>
    </Date>
    <Bottom>
      <div className='userInfo'>
        <div>
          <img src="https://lh3.googleusercontent.com/a/AEdFTp48u_P5jsUApq_vhtxsyJi4vCSCN8MAK_ieJk5N=s288-p-rw-no-mo" alt="프로필 사진"/>
        </div>
        <div>
          <label>by <span>{post.user.userName}</span></label>
        </div>
      </div>
      <div className='likes'>
        <div>
          <IoHeartSharp className='heart' />
        </div>
        <div>
          <label>77</label>
        </div>
      </div>
    </Bottom>
  </VCard>
  )
}

const VCard = styled.div`
  width: 19.409rem;
  border-radius: 4px;
  background-color: #1E1E1E;
  margin: 1rem;
  cursor: pointer;
  :hover {
    margin: 0px 1rem 1rem 1rem;
    animation: card-up 0.5s;
    @keyframes card-up {
      from {
        margin: 1rem;
      }
      to {
        margin: 0px 1rem 1rem 1rem;
      }
  }
  }
  .thumbnail {
  width: 100%;
  height: 11rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
`

const Contents = styled.div`
  padding: 1rem;
  height: 4rem;
  overflow: hidden;
  display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-wrap: break-word;
  h4 {
    margin-top: -0.4rem;
    margin-bottom: -0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-size: 0.875rem;
    color: #D9D9D9;
    line-height: 1.5;
  }
`

const Date = styled.div`
  margin-top: 0.7rem;
  padding: 1rem;
  font-size: 0.75rem;
  color: #ACACAC;
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 1rem;
  border-top: 1px solid #2A2A2A;
  font-size: 0.75rem;
  .userInfo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .userInfo > div:nth-child(1) > img {
    width: 1.5rem;
    border-radius: 100%;
    margin-top: 0.1rem;
  }
  .likes {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .heart {
    font-size: 1rem;
    margin-top: 0.1rem;
  }
`

export default Card