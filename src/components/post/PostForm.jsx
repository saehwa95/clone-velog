import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsTypeBold, BsTypeItalic, BsImage } from "react-icons/bs";
import { CgFormatStrike, CgCode } from "react-icons/cg";
import { IoMdQuote } from "react-icons/io";
import { FiLink2 } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { IoEarth } from "react-icons/io5";
import { RiLock2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __addPost } from "../../redux/modules/postSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postImage, setPostImage] = useState();
  const [privateOption, setPrivateOption] = useState(1);

  const isPosting = useSelector((state)=>state.postSlice.isPosting)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postAddSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append("title", title);
    form.append("postImage", postImage);
    form.append("content", content);
    form.append("privateOption", privateOption);

    dispatch(__addPost({ FormData: form }));

    console.log(title, content, postImage, privateOption);
  };

  const togglePrivate = (option) => {
    setPrivateOption(option);
  };

  useEffect(()=>{
    if (!isPosting) return
    if (isPosting) {
      navigate('/')
    }
  },[isPosting])

  return (
    <PostWrapper>
      <AddForm onSubmit={postAddSubmit}>
        <Main>
          <div className="postAdd-title">
            <label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력하세요"
              />
            </label>
          </div>
          <div className="title-bottom" />
          <div className="postAdd-tag">
            <span>태그를 입력하세요</span>
          </div>
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
                <input
                  type="file"
                  accept="image/*"
                  name="thumnail"
                  onChange={(e) => setPostImage(e.target.files)}
                />
              </label>
            </div>
            <div className="div-box">
              <CgCode style={{ fontSize: "24px" }} />
            </div>
          </FontWrapper>
          <div className="postAdd-content">
            <label>
              <textarea
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="당신의 이야기를 적어보세요..."
              />
            </label>
          </div>
        </Main>

        <Bottom>
          <div className="priviate">
            <button
              onClick={() => {
                togglePrivate(1);
              }}
            >
              <IoEarth style={{ marginRight: "25px" }} />
              전체공개
            </button>
            <button
              onClick={() => {
                togglePrivate(0);
              }}
            >
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
        </Bottom>
      </AddForm>
    </PostWrapper>
  );
};

export default PostForm;

const PostWrapper = styled.div`
  width: 960px;
  background-color: #121212;
`;

const AddForm = styled.form`
  .postAdd-title input {
    height: 66px;
    font-size: 2.75rem;
    font-weight: bold;
    line-height: 1.5;
  }

  .title-bottom {
    width: 4rem;
    height: 6px;
    background-color: rgb(73, 80, 87);
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 1px;
  }

  .postAdd-tag {
    height: 50px;
    span {
      font-size: 1.125rem;
      line-height: 2rem;
      color: #757575;
    }
  }

  .postAdd-content {
    height: 100%;
    textarea {
      font-size: 1.125rem;
      line-height: 1.5;
      font-style: italic;
      text-align: top;
      width: 100%;
      height: 530px;
      background-color: #121212;
      color: #ececec;
      outline: none;
      border: none;
      resize: none;
      caret-color: #63e6be;
    }
  }

  .priviate {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 960px;
    height: 3rem;
    gap: 20px;
    margin-bottom: 8px;
    button {
      width: 165px;
      height: 50px;
      cursor: pointer;
      border: none;
      outline: none;
      border-radius: 4px;
      color: #ececec;
      border: none;
      font-size: 1.125rem;
      font-weight: bold;
      background-color: #2e2e2e;
      :hover {
        background-color: #232323;
      }
      :focus {
        color: #63e6be;
        border: 1px solid;
      }
    }
  }

  .bottom {
    padding-left: 1rem;
    padding-right: 1rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2e2e2e;
  }

  .bottom-left {
    button {
      height: 2.5rem;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      background-color: #2e2e2e;
      text-decoration: none;
      cursor: pointer;
      border: none;
      outline: none;
      color: #ececec;
      font-size: 1.125rem;
      :hover {
        background-color: #434343;
        border-radius: 5px;
      }
    }
  }

  .bottom-right {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;
      width: 110px;
      margin-right: 13px;
      font-size: 1.125rem;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      color: #96f2d7;
      :hover {
        background-color: #434343;
        border-radius: 5px;
      }
    }
    button {
      height: 2.5rem;
      font-size: 1.125rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      background-color: #96f2d7;
      border-radius: 4px;
      padding: 0px 1.25rem;
      font-weight: bold;
      cursor: pointer;
      :hover {
        background-color: #63e6be;
      }
    }
  }

  input {
    width: 100%;
    background-color: #121212;
    color: #ececec;
    outline: none;
    border: none;
  }
`;

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

const Main = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const Bottom = styled.div`
  width: 960px;
  position: fixed;
  bottom: 0;
`;
