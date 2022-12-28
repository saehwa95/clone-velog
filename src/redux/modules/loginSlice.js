import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
      userName: "",
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
  detail: [{}],
  isLoading: false,
  error: null,
  dupCheck: false,
  userId: "",
  isLogin: false,
  isSignUp: false,
};

export const __signUpUser = createAsyncThunk(
  "SIGNUP_USER",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`/user/signup`, payload);
      return thunkAPI.fulfillWithValue(res.data.message);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __dupEmail = createAsyncThunk(
  "DUB_EMAIL",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`/user/emailCheck`, payload);
      window.alert("사용 가능한 이메일입니다");
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      window.alert("중복된 이메일이 있습니다");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __loginUser = createAsyncThunk(
  "LOGIN_USER",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`/user/login/local`, payload);
      localStorage.clear();
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editUserDetail = createAsyncThunk(
  "EDIT_USER_DETAIL",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`/user/detail/`);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    //__signUpUser
    [__signUpUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__signUpUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSignUp = true;
      alert("회원가입을 축하합니다!");
    },
    [__signUpUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //__dupEmail
    [__dupEmail.pending]: (state) => {
      state.isLoading = true;
    },
    [__dupEmail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dupCheck = action.payload;
    },
    [__dupEmail.pending]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //__loginUser
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userId = action.payload.userId;
      state.isLogin = true;
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert("로그인 정보가 일치하지 않습니다!");
    },

    //__editUserDetail
    [__editUserDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__editUserDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__editUserDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;
