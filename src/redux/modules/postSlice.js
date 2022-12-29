import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../api/axios";

export const initialState = {
  posts: [
    {
      postId: "",
      title: "",
      content: "",
      postImage: "",
      privateOption: "",
      createdAt: "",
      userName: "",
      commentCount: "",
    },
  ],
  detail: {
    postId: "",
    postImage: "",
    title: "",
    content: "",
    createdAt: "",
    userName: "",
    profileImage: "",
    commentCount: "",
  },
  isLoding: false,
  error: false,
};

//게시글 전체 조회
export const __getPost = createAsyncThunk(
  "post/getPost",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get("/posts");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const __getTrendingPost = createAsyncThunk(
  "post/getTrendingPost",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get("/posts/trending");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//게시글 상세 조회
export const __getDetail = createAsyncThunk(
  "post/getDetail",
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/posts/${id}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      if (error.response.data.errorMessage === "존재하지 않는 게시글") alert('게시글이 존재하지 않습니다.')
      else alert("알 수 없는 오류입니다.")
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시글 작성
export const __addPost = createAsyncThunk(
  "post/addPost",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`/posts`, payload);
      if (res.status === 201) {
        const { data } = await instance.get("/posts");
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      window.alert("게시글 작성에 실패했습니다.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//게시글 수정 조회
export const __getUpdatePost = createAsyncThunk(
  "post" / "getUpdatePost",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.get(`/posts/update/${payload.postId}`);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시글 수정
export const __updatePost = createAsyncThunk(
  "post/updatePost",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.patch(`/posts/${payload.postId}`, {
        title: payload.title,
        content: payload.content,
        privateOption: payload.privateOption,
      });
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      window.alert("게시글 작성에 실패했습니다.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//게시글 삭제
export const __deletePost = createAsyncThunk(
  "post/deletePost",
  async (id, thunkApi) => {
    try {
      await instance.delete(`/posts/${id}`);
      const data = await instance.get("/posts");
      return thunkApi.fulfillWithValue(data.data);
    } catch (error) {

      const postError = error.response.data.errorMessage
      if (postError === "잘못된 요청") alert("잘못된 요청입니다.")
      else if (postError === "로그인 정보 없음") alert("로그인이 필요합니다.")
      else if (postError === "사용자 정보 불일치") alert("권한이 없습니다.")
      else if (postError === "존재하지 않는 게시글") alert("게시글이 이미 삭제되었습니다.")
      else alert("알 수 없는 오류입니다.")

      return thunkApi.rejectWithValue(error);
    }
  }
);

//리듀서
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //게시글 전체 조회
      .addCase(__getPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(__getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(__getTrendingPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getTrendingPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(__getTrendingPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //게시글 상세 조회
      .addCase(__getDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detail = action.payload;
      })
      .addCase(__getDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //게시글 작성
      .addCase(__addPost.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__addPost.fulfilled, (state, action) => {
        state.isLoding = false;
        state.posts = action.payload;
      })
      .addCase(__addPost.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      })
      //게시글 수정 조회
      .addCase(__getUpdatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getUpdatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(__getUpdatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //게시글 수정
      .addCase(__updatePost.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(__updatePost.fulfilled, (state, action) => {
        state.isLoding = false;
        state.posts = action.payload;
      })
      .addCase(__updatePost.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      })
      //게시글 삭제
      .addCase(__deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(__deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
