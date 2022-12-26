import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const PostDetail = () => {
  const navigate = useNavigate()

  return (
    <Wrap>
      <ContentsBox>
        <h1>125</h1>
        <div className='writing-info'>
          <div>
            <span>jhchoi1182</span> · <label>3일 전</label>
          </div>
          <div className='modification'>
            <label>통계 </label>
            <label onClick={() => navigate('/postupdate')}>수정 </label>
            <label>삭제 </label>
          </div>
        </div>
        <div className='content'>
          125
        </div>
      </ContentsBox>
      <UserBox>
        {/* <div>
        <img src="https://lh3.googleusercontent.com/a/AEdFTp48u_P5jsUApq_vhtxsyJi4vCSCN8MAK_ieJk5N=s288-p-rw-no-mo" alt="프로필 사진"/>
        </div> */}
      
      </UserBox>
  
    </Wrap>
  )
}

const Wrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ContentsBox = styled.div`
  max-width: 49rem;
  width: 100%;
  margin-top: 3.3rem;
  h1 {
    font-size: 3rem;
  }
  .writing-info {
    display: flex;
    justify-content: space-between;
  }
  span {
    font-weight: 1000;
    :hover {
      text-decoration: underline;
    }
  }
  label {
    color: #ACACAC;
    cursor: pointer;
  }
  .modification {
    gap: 1rem;
    margin-right: 1rem;
  }
  .content {
    margin-top: 6.3rem;
    font-size: 1.1rem;
  }
`

const UserBox = styled.div`
  
`

export default PostDetail