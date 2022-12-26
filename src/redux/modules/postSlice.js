import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const instance = axios.create({
//   baseURL:,
//   headers:{
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   }
// })

const initialState = {
  posts: [
    { postId: "", title: "", content: "", postImage: "", privateOption: "" },
  ],
  isLoding: false,
  error: false,
  isPosting: false,
};

//게시글 전체 조회

//게시글 상세 조회

//게시글 작성
export const __addPost = createAsyncThunk(
  "post/addPost",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:3001/posts", payload);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      window.alert("게시글 작성에 실패했습니다.")
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//게시글 수정

//게시글 삭제

//리듀서
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    //게시글 전체 조회
    //게시글 상세 조회
    //게시글 작성
    [__addPost.pending]: (state) => {
      state.isLoding = true;
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.isPosting = true;
      state.posts.push(action.payload);
    },
    [__addPost.pending]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
    //게시글 수정
    //게시글 삭제
  },
});

export default postSlice.reducer;
