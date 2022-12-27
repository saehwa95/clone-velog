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
      const response = await instance.get(`/posts/${id}/comments`)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __addComment = createAsyncThunk(
  "comment/addComment",
  async (comment, thunkAPI) => {
    console.log(comment);
    try {
      await instance.post(`/posts/${comment.id}/comments`, {
        content: comment.enteredComment
      }
      )
      const result = await instance.get(`/posts/${comment.id}/comments`);

      return thunkAPI.fulfillWithValue(result.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __updateComment = createAsyncThunk(
  "comment/updateComment",
  async (comment, thunkAPI) => {
    try {
      await instance.post(`/comments/${comment.id}`, {
        content: comment.content
      })
      return thunkAPI.fulfillWithValue(comment)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      await instance.delete(`/comments/${id}`)
      return thunkAPI.fulfillWithValue(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
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
        state.comments = state.comments.map((comment) => (comment.id === action.payload.id ? { ...comment, content: action.payload.content } : comment));
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