import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CommentApi, instance } from "../api/axios";

const initialState = {
  comments: [
    {
      commentId: "",
      content: "",
      createdAt: "",
      user: {
        userId: "",
        profileImae: "",
        userName: ""
      }
    }
  ],
  isLoading: false,
  error: null,
};

export const __getComment = createAsyncThunk(
  "comment/getComment",
  async (id, thunkAPI) => {
    try {
      const { data } = await CommentApi.read(id)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {

      if (error.response.data.errorMessage === "게시글이 존재하지 않음") alert("게시글이 존재하지 않습니다.")

      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const __addComment = createAsyncThunk(
  "comment/addComment",
  async (comment, thunkAPI) => {
    try {
      await CommentApi.create(comment)
      const result = await CommentApi.read(comment.id)
      return thunkAPI.fulfillWithValue(result.data)
    } catch (error) {

      const cmtError = error.response.data.errorMessage
      if (cmtError === "잘못된 요청") alert("잘못된 요청입니다.")
      else if (cmtError === "게시글이 존재하지 않음") alert("게시글이 존재하지 않습니다.")
      else if (cmtError === "로그인 정보 없음") alert("로그인이 필요합니다.")
      else alert("알 수 없는 오류입니다.")

      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const __updateComment = createAsyncThunk(
  "comment/updateComment",
  async (comment, thunkAPI) => {
    try {
      await CommentApi.update(comment)
      return thunkAPI.fulfillWithValue(comment)
    } catch (error) {

      const cmtError = error.response.data.errorMessage
      if (cmtError === "잘못된 요청") alert("잘못된 요청입니다.")
      else if (cmtError === "댓글이 존재하지 않음") alert("댓글이 존재하지 않습니다.")
      else if (cmtError === "유저 정보 불일치") alert("권한이 없습니다.")
      else if (cmtError === "로그인 정보 없음") alert("로그인이 필요합니다.")
      else alert("알 수 없는 오류입니다.")

      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const __deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async (id, thunkAPI) => {
    try {
      await CommentApi.delete(id)
      return thunkAPI.fulfillWithValue(id)
    } catch (error) {

      const cmtError = error.response.data.errorMessage
      if (cmtError === "댓글이 존재하지 않음") alert("댓글이 존재하지 않습니다.")
      else if (cmtError === "유저 정보 불일치") alert("권한이 없습니다.")
      else if (cmtError === "로그인 정보 없음") alert("로그인이 필요합니다.")
      else alert("알 수 없는 오류입니다.")

      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const commentSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload
      })
      .addCase(__getComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(__addComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__addComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload
      })
      .addCase(__addComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(__updateComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__updateComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = state.comments.map((comment) => (comment.commentId === action.payload.id ? { ...comment, content: action.payload.content } : comment));
      })
      .addCase(__updateComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(__deleteComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deleteComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = state.comments.filter((comment) => comment.commentId !== action.payload);
      })
      .addCase(__deleteComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export default commentSlice.reducer;