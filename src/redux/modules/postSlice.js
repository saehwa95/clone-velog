import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
      const res = await instance.post(`/posts`, payload);
      window.alert("게시글 작성에 성공했습니다.");
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      window.alert("게시글 작성에 실패했습니다.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//게시글 수정
export const __updatePost = createAsyncThunk(
  "post/updatePost",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.patch(
        `/posts/${payload.postId}`,
        payload
      );
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      window.alert("게시글 작성에 실패했습니다.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//게시글 삭제

//리듀서
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder
    //게시글 전체 조회
    //게시글 상세 조회

    //게시글 작성
    .addCase(__addPost.pending,(state) => {
      state.isLoding = true;
    })
    .addCase(__addPost.fulfilled,(state, action) => {
      state.isLoding = false;
      state.isPosting = true;
      state.posts = action.payload;
    })
    .addCase(__addPost.rejected,(state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    })

    //게시글 수정
    .addCase(__updatePost.pending,(state) => {
      state.isLoding = true;
    })
    .addCase(__updatePost.fulfilled,(state, action) => {
      state.isLoding = false;
      state.isPosting = true;
      state.posts = action.payload;
    })
    .addCase(__updatePost.rejected,(state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    })

    //게시글 삭제
  },
});

export default postSlice.reducer;
