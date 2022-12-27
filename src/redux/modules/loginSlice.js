import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../api/axios";

// export const BlogApi = {
//   create: async (payload) => await instance.post("api/signup"),
//   delete: async (id) =>
//     await instance.delete("api/blog", {
//       id: id,
//     }),
// };

// export const Auth = {
//   login: async () => await instance.post("api/login", payload),
// };

const initialState = {
  signup: [
    {
      email: "",
      username: "",
      password: "",
      profileImage: "",
    },
  ],
  login: [
    {
      email: "",
      password: "",
    },
  ],
  isLoading: false,
  error: null,
};

export const signUpUser = createAsyncThunk(
  "SIGNUP_USER",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`user/signup`, payload);
      console.log(res);
      return thunkAPI.fulfillWithValue(res.data.message);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "LOGIN_USER",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`user/login/local`, payload);

      localStorage.clear();
      localStorage.setItem("token", res.data.token)
      // return thunkAPI.fulfillWithValue(res.)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    //Sign Up extraReducer
    [signUpUser.pending]: (state) => {
      state.isLoading = true;
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert("회원가입을 축하합니다!");
    },
    [signUpUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //Login extraReducer
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = true;
      alert("로그인이 확인되었습니다!");
      window.location.replace("http://localhost:3000");
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
      alert("로그인 정보가 일치하지 않습니다!");
    },
  },
});

export default loginSlice.reducer;
